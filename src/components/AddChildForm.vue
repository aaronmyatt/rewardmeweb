<template>
    <div>
        <h4>Add Child</h4>
        <form @submit.prevent="submit">
            <q-input name="name" outlined v-model="form.name" label="Name" />
            <q-file name="avatar" v-model="image" filled label="Select an image" />
            <q-btn label="Add Child" type="submit" />
            <q-separator />
            <q-img v-if="form.avatar" :src="form.avatar"></q-img>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar'
import { onMounted } from 'vue';
import useActiveChild from 'src/composables/useActiveChild';
import useStorage from 'src/composables/useStorage';

const props = defineProps<{
    edit?: boolean
}>()

const $q = useQuasar();
const { activeChild } = useActiveChild();
const storage = useStorage();


const image = ref(null);
const user = ref(null);

const form = ref<{
    id?: string,
    name?: string,
    created_at?: number,
    archived?: false;
    avatar?: string;
}>({});

onMounted(() => {
    if (props.edit) {
        form.value = activeChild.value;
    }
    globalThis.rmcore.process({ auth: { user: true } }).then((results) => {
        if (results.data) {
            user.value = results.data;
        }
    })
})

async function submit(e: Event) {
    if (!e.target) return;

    if (image.value && user.value && user.value.session) {
        const output = await storage.save(image.value, image.value.name, 'children', user.value.session.user.id);
        if (output.errors || output.data.error) {
            console.error('There was an issue saving the file to the server', output.errors, output.data.error);
            $q.notify({
                type: 'negative',
                message: 'Image Not Saved',
                icon: 'mdi-exclamation-thick',
                timeout: 0,
                closeBtn: true,
                position: 'bottom-right'

            })
        } else {
            form.value.avatar = storage.fromFullPath(output.data.fullPath);
            $q.notify({
                type: 'positive',
                message: 'Image Saved',
                icon: 'mdi-check',
                position: 'top-right'
            })
        }
    }

    globalThis.rmcore.process({
        children: {
            add: form.value,
        }
    })
        .then((results) => {
            if (results.data) {
                $q.notify({
                    type: 'positive',
                    message: 'Child Added',
                    icon: 'mdi-check',
                    position: 'top-right'
                })
            }
            if (results.errors) {
                console.error(results);
                $q.notify({
                    type: 'negative',
                    message: 'Child Not Added',
                    icon: 'mdi-exclamation-thick',
                    caption: results.errors[0].message,
                    timeout: 0,
                    closeBtn: true,
                    position: 'bottom-right'

                })
            }
        })
}

</script>