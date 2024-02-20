<template>
  <q-page class="q-ma-sm">
    <section class="row flex-center bg-white">
      <div class="col-xs-12 col-10 ">
        <div class="q-pa-md-xl">
          <q-command-palette :commands="commands"></q-command-palette>
        </div>
      </div>
    </section>

    <div id="sections" v-for="component in sections" :key="component.name">
      <component :is="component" />
    </div>

    <base-form-dialog :show="showAddRewardForm">
      <add-reward-form :edit="editMode" />
    </base-form-dialog>

    <base-form-dialog :show="showAddChildForm">
      <add-child-form :edit="editMode" />
    </base-form-dialog>

    <base-form-dialog :show="showEditRewardForm">
      <add-reward-form :edit="true" />
    </base-form-dialog>

    <base-form-dialog :show="showEditChildForm">
      <add-child-form :edit="true" />
    </base-form-dialog>

    <base-form-dialog :show="showPointsManager">
      <point-card :edit="editMode" />
    </base-form-dialog>

  </q-page>
</template>

<style lang="scss">
#sections {
  padding: 30px;
  margin-bottom: 10px;

  // except on mobile where it should be full width
  @media (max-width: 600px) {
    padding: 0px;
  }
}

#sections:nth-child(odd) {
  // background-color: #f1f1f1;
  /* Light grey background for odd items */
}

#sections:nth-child(even) {
  /* background-color: #ffffff; */
  /* White background for even items */
}
</style>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';
import type { Component } from 'vue';
import useModalManager from 'src/composables/useModalManager';
import useCommands from 'src/composables/useCommands';
import QCommandPalette from 'src/components/QCommandPalette.vue';
import BaseFormDialog from 'src/components/BaseFormDialog.vue';
import AddRewardForm from 'src/components/AddRewardForm.vue';
import AddChildForm from 'src/components/AddChildForm.vue';

import Settings from 'src/components/Settings.vue';
import Help from 'src/components/Help.vue';
import RewardGrid from 'src/components/RewardGrid.vue';
import PointCard from 'src/components/PointCard.vue';

const { commands, addCommand } = useCommands();

const {
  showAddRewardForm,
  showAddChildForm,
  showPointsManager,
  showEditRewardForm,
  showEditChildForm
} = useModalManager();

const editMode = ref(false);

const sections = shallowRef<Component[]>([Help, PointCard, RewardGrid, Settings]);
const bumpSection = (section: String) => {
  const toBump = sections.value.find((component) => {
    return component.__name === section;
  })
  if (toBump) {
    const remaining = sections.value.filter((component) => {
      return component.__name !== section;
    })
    remaining.unshift(toBump);
    sections.value = remaining;
  }
}

[
  {
    name: 'Show Points',
    icon: 'mdi-eye',
    command: () => {
      bumpSection('PointCard')
    }
  },
  {
    name: 'Show Rewards',
    icon: 'mdi-cards',
    command: () => {
      bumpSection('RewardGrid')
    }
  },
  {
    name: 'Settings',
    icon: 'mdi-cog',
    command: () => {
      bumpSection('Settings')
    }
  },
  {
    name: 'Help',
    icon: 'mdi-help',
    command: () => {
      bumpSection('Help')
    }
  },

].forEach((command) => {
  addCommand(command);
})
</script>
