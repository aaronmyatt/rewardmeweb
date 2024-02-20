<template>
    <q-dialog position="right" full-height v-model="show" @hide="() => $emit('hide')">
        <q-card class="dialog-card">
            <q-card-section class="col">
                <slot></slot>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<style lang="scss">
.dialog-card {
    width: 50vw;

    // except on mobile where it should be full width
    @media (max-width: 600px) {
        width: 90vw;
    }
}
</style>

<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps<{
    show?: boolean
}>()

const show = ref<boolean>(false);

watch(() => props.show, (value) => {
    show.value = value;
})
</script>