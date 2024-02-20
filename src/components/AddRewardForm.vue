<template>
    <div>
        <h4>Add Reward</h4>
        <form @submit.prevent="submit">
            <q-input name="name" outlined v-model="form.name" label="Reward Name" />
            <q-input name="points" outlined v-model.number="form.points" label="Reward Cost" type="number" />
            <q-input name="image" outlined v-model="form.image" label="Image URL" v-if="form.image" disable />
            <q-file name="avatar" v-model="image" filled label="Select an image" />
            <q-btn label="Add Reward" type="submit" />
            <q-separator />
            <q-img v-if="form.image" :src="form.image"></q-img>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, } from 'vue';
import { useQuasar } from 'quasar';
import useStorage from 'src/composables/useStorage';
import { onUnmounted } from 'vue';
import type { Reward } from 'src/composables/useRewards';

const props = defineProps<{
    edit?: boolean
}>()

const $q = useQuasar();
const storage = useStorage();
const user = ref(null);

const form = ref<Reward>({
    id: '',
    name: '',
    points: 0,
    image: '',
    claimed: false,
    archived: false
});
const image = ref<File>();

onMounted(async () => {
    const queryParams = Object.fromEntries((new URLSearchParams(location.search)))
    if (queryParams.rewardid) {
        const { state } = await globalThis.rmcore.process({})
        form.value = state.rewards.getById(queryParams.rewardid)
    }

    globalThis.rmcore.process({ auth: { user: true } }).then((results) => {
        if (results.data) {
            user.value = results.data;
        }
    })
})

onUnmounted(() => {
    const queryParams = (new URLSearchParams(location.search))
    queryParams.delete('rewardid')
    window.history.replaceState(
        {},
        "",
        `${window.location.pathname}${queryParams.size > 0 ? '?' + queryParams.toString() : ''}`,
    );
    form.value = {};
})


async function submit(e: Event) {
    if (!e.target) return;

    if (image.value && user.value && user.value.session) {
        const output = await storage.save(image.value, image.value.name, 'rewards', user.value.session.user.id);
        if (output.errors) {
            console.error('There was an issue saving the file to the server', output.errors);
            $q.notify({
                type: 'negative',
                message: 'Image Not Saved',
                icon: 'mdi-exclamation-thick',
                timeout: 0,
                closeBtn: true,
                position: 'bottom-right'

            })
        } else {
            form.value.image = storage.fromFullPath(output.data.fullPath);
            $q.notify({
                type: 'positive',
                message: 'Image Saved',
                icon: 'mdi-check',
                position: 'top-right'
            })
        }
    }


    // form.value.points = parseInt(form.value.points as any);
    globalThis.rmcore.process({
        rewards: {
            add: form.value
        }
    })
        .then((results) => {
            if (results.data) {
                $q.notify({
                    type: 'positive',
                    message: 'Reward Added',
                    icon: 'mdi-check',
                    position: 'top-right'
                })
            }
            if (results.errors) {
                console.error(results);
                $q.notify({
                    type: 'negative',
                    message: 'Reward Not Added',
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