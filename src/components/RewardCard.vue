<template>
    <q-card>
        <q-card-section horizontal>
            <q-img :src="props.image" ratio="1">
                <div class="absolute-bottom-left text-subtitle2">
                    {{ props.name }}
                </div>
            </q-img>
        </q-card-section>
        <q-card-actions class="row">
            <q-btn @click="() => toggleEditRewardForm(props.id)">Edit</q-btn>
            <q-btn @click="() => archiveReward(props.id)" icon="mdi-delete"></q-btn>
            <q-btn v-if="props.claimed" @click="() => unclaimReward(props)" icon="mdi-currency-usd"
                :label="`Refund ${props.points}`"></q-btn>
            <q-btn v-else @click="() => claimReward(props)" icon="mdi-currency-usd"
                :label="`Spend ${props.points}`"></q-btn>
        </q-card-actions>
    </q-card>
</template>

<script setup lang="ts">
import useModalManager from "src/composables/useModalManager";
import useRewards from 'src/composables/useRewards';
import type { Reward } from 'src/composables/useRewards';
const { claimReward, unclaimReward, archiveReward } = useRewards();
const { toggleEditRewardForm } = useModalManager();
const props = defineProps<Reward>()
</script>