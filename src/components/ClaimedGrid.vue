<template>
    <q-card v-if="claimedRewards.length > 0">
        <q-card-section>
            <q-toolbar class="q-pa-none">
                <q-toolbar-title class="text-h4">Rewards Claimed</q-toolbar-title>
            </q-toolbar>
        </q-card-section>
        <q-card-section>
            <div class="row">
                <div class="col-12 col-md-3" v-for="reward in claimedRewards" :key="reward.id">
                    <reward-card v-bind="reward" />
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import RewardCard from 'src/components/RewardCard.vue';
import useRewards from 'src/composables/useRewards';
const { claimedRewards } = useRewards();
</script>
