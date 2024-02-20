<template>
    <q-item clickable v-ripple @click="props.countCommand" :active="props.active">
        <q-item-section avatar>
            <q-icon :name="props.icon" />
        </q-item-section>
        <q-item-section>
            <q-item-label>{{ props.name }}</q-item-label>
            <q-item-label caption>{{ props.description }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script setup lang="ts">
export interface QPaletteCommand {
    name: string,
    icon: string,
    description?: string,
    command: () => void,
    countCommand?: () => void,
    active?: boolean
}
const props = defineProps<QPaletteCommand>()
</script>