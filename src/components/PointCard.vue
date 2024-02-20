<template>
    <q-card>
        <q-card-section style="text-transform: capitalize;">
            <div class="col-12 col-md-6">
                <div class="absolute-top-right">
                    <q-btn @click="toggleEditChildForm" class="z-top" color="primary" ripple icon="mdi-pencil"></q-btn>
                </div>
                <q-img :src="activeChild.avatar" spinner-color="white" ratio="1">
                    <div class="absolute-bottom-left text-subtitle2">
                        <p class="text-h4">{{ activeChild.name }}</p>
                        <p class="text-h5">Points: {{ activeChildPoints }}</p>
                    </div>
                </q-img>
            </div>
        </q-card-section>
        <q-card-actions class="row">
            <q-btn-group spread class="col-12">
                <q-btn padding="md" size="xl" icon="mdi-plus" @click="addPoints"></q-btn>
                <q-separator vertical />
                <q-btn padding="md" size="xl" icon="mdi-minus" @click="subtractPoints"></q-btn>
            </q-btn-group>
        </q-card-actions>
        <q-card-actions class="row">
            <q-btn-group spread class="col-12 row">
                <q-input class="col-7" outlined v-model.number="customAmount" name="changeAmount" label="Custom Amount"
                    type="number"></q-input>
                <q-btn outline icon="mdi-check" @click="() => _changePoints(customAmount)"></q-btn>
            </q-btn-group>
        </q-card-actions>
    </q-card>
</template>

<style lang="scss" scoped>
.q-card {
    max-width: 600px;
    margin: 0 auto;
}
</style>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import useActiveChild from 'src/composables/useActiveChild';
import usePoints from 'src/composables/usePoints';
import useModalManager from 'src/composables/useModalManager';
import { ref } from 'vue';
const $q = useQuasar();
const { activeChild } = useActiveChild();
const { activeChildPoints } = usePoints();
const { toggleEditChildForm } = useModalManager();

const customAmount = ref<number>(0);

function _changePoints(amount = 1) {
    globalThis.rmcore.process({
        points: {
            add: {
                points: amount
            }
        }
    }).then((results) => {
        if (results.data) {
            $q.notify({
                type: 'positive',
                message: 'Points changed: ' + amount,
                icon: 'mdi-check',
                position: 'top-right'
            })
        }
        if (results.errors) {
            console.error(results);
            $q.notify({
                type: 'negative',
                message: 'Points Not Added',
                icon: 'mdi-exclamation-thick',
                caption: results.errors[0].message,
                timeout: 0,
                closeBtn: true,
                position: 'bottom-right'

            })
        }

        dispatchEvent(new CustomEvent('points-changed'));
    })
}

function addPoints(e) {
    _changePoints(1);
}

function subtractPoints(e) {
    _changePoints(-1);
}
</script>