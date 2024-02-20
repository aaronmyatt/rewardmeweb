<template>
    <section>
        <q-card>
            <q-card-section>
                <q-toolbar class="q-pa-none">
                    <q-toolbar-title class="text-h4">Rewards</q-toolbar-title>
                    <q-btn icon="mdi-plus" @click="toggleAddRewardForm"></q-btn>
                </q-toolbar>
            </q-card-section>
            <q-card-section>
                <div class="row">
                    <div class="col-12 col-md-3" v-for="reward in rewards.filter(r => !r.claimed)" :key="reward.id">
                        <reward-card v-bind="reward" />
                    </div>
                </div>
            </q-card-section>
            <q-card-actions>
                <q-btn label="Add Reward" @click="toggleAddRewardForm"></q-btn>
            </q-card-actions>
        </q-card>

        <claimed-grid></claimed-grid>
    </section>
</template>

<script setup lang="ts">
import RewardCard from 'src/components/RewardCard.vue';
import useModalManager from 'src/composables/useModalManager';
import useRewards from 'src/composables/useRewards';
import ClaimedGrid from './ClaimedGrid.vue';
const { toggleAddRewardForm } = useModalManager();
const { rewards } = useRewards();
</script>
