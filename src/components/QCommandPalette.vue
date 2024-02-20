<template>
    <div>
        <div class="row overflow-auto">
            <q-btn-group>
                <q-btn stack square :size="$q.screen.lt.md ? 'sm' : 'md'" :key="command.name" v-for="command in commands"
                    :icon="command.icon" :label="command.name" @click="command.countCommand" />
            </q-btn-group>
        </div>
        <div class="row flex-center">
            <q-input class="full-width" ref="textInput" v-model="text" label="What ya looking for?"
                @update:model-value="shouldShowMenu" />
            <q-menu class="z-max" v-model="showMenu" no-focus fit @hide="() => {
                if (commandHistory.length > 1) {
                    commands = commandHistory[0];
                }
            }">
                <q-list>
                    <q-palette-item v-for="command in results" v-bind="command.item" ref="listItems" />
                </q-list>
            </q-menu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.q-btn-group {
    border: none;
    box-shadow: none;
}
</style>

<script setup lang="ts">
import QPaletteItem from './QPaletteItem.vue';
import { ref, computed, watch } from 'vue';
import { onKeyStroke, useCycleList, onStartTyping, useStorage } from '@vueuse/core'
import type { RemovableRef } from '@vueuse/core'
import type { QPaletteCommand } from './QPaletteItem.vue'
import Fuse from 'fuse.js'
import { useQuasar } from 'quasar';

const $q = useQuasar();

const props = defineProps<{
    commands: QPaletteCommand[]
}>()

const commandCounter: RemovableRef<{ [key: string]: { count: number, lastChanged: number } }> = useStorage('COMMAND_COUNTER', {})

const text = ref<string>('');
const textInput = ref<HTMLElement>();

const showMenu = ref<boolean>(false);
const listItems: typeof QPaletteItem[] = [];
const cycleItems = useCycleList(listItems)

const commands = ref<QPaletteCommand[]>()
const commandHistory: QPaletteCommand[][] = [];
watch(() => props.commands, (nu, old) => {
    if (nu !== old) {
        commands.value = props.commands.map(command => {
            command.countCommand = () => {
                commandCounter.value = {
                    ...commandCounter.value,
                    [command.name]: {
                        count: commandCounter.value[command.name]?.count ? commandCounter.value[command.name].count + 1 : 1,
                        lastChanged: Date.now()
                    }
                };
                return command.command();
            };
            return command
        }).toSorted((a, b) => {
            return (commandCounter.value[b.name]?.count || 0) - (commandCounter.value[a.name]?.count || 0)
        });
        commandHistory.push(props.commands);
    }
}, { deep: true, immediate: true })


onStartTyping((e) => {
    // e.preventDefault()
    console.log(e)
    textInput.value?.focus();
})

// onKeyStroke(['Meta', 'k'], (e) => {
//     e.preventDefault()
//     textInput.value?.focus();
// })

onKeyStroke(['/'], (e) => {
    e.preventDefault()
    textInput.value?.focus();
})

onKeyStroke('ArrowDown', (e) => {
    e.preventDefault()
    if (listItems.some(item => document.activeElement === item.$el)) {
        cycleItems.next()
        cycleItems.state.value.$el.focus()
    } else {
        showMenu && listItems[0].$el.focus()
    }
})

onKeyStroke('ArrowUp', (e) => {
    e.preventDefault()
    if (listItems.some(item => document.activeElement === item.$el)) {
        cycleItems.prev()
        cycleItems.state.value.$el.focus()
    } else {
        showMenu && listItems[listItems.length - 1].$el.focus()
    }
})

function shouldShowMenu() {
    if (text.value !== '') {
        showMenu.value = true;
    }
}
const results = computed(() => {
    if (text.value === '') return commands.value.map(command => ({ item: command }));
    const f = new Fuse(commands.value, {
        keys: ['name'],
        // sortFn: (a, b) => {
        //     return (commandCounter.value[b.item.name]?.count || 0) - (commandCounter.value[a.item.name]?.count || 0)
        // }
    })
    return f.search(text.value);
})

</script>