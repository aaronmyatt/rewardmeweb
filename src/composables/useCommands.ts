import { nextTick, ref } from "vue";
import type { Reward } from "./useRewards";
import useActiveChild from "./useActiveChild";
import useModalManager from "./useModalManager";

export default function useCommands() {
  const { activeChild } = useActiveChild();
  const modals = useModalManager();

  const commands = [
    {
      name: "Add Child",
      icon: "mdi-human-child",
      command: modals.toggleAddChildForm,
    },
    {
      name: "Edit Child",
      icon: "mdi-pencil",
      command: modals.toggleEditChildForm,
    },
    {
      name: "Add Reward",
      icon: "mdi-gift",
      description: "Add Reward",
      command: modals.toggleAddRewardForm,
    },
    {
      name: "Edit Reward",
      icon: "mdi-pencil",
      command: async () => {
        const { state } = await globalThis.rmcore.process();
        reactiveCommands.value = state.rewards.getForChild(activeChild.value.id)
          .map((reward: Reward) => {
            return {
              name: reward.name,
              icon: "mdi-gift",
              command: async () => {
                modals.toggleEditRewardForm(reward.id);
              },
            };
          });
      },
    },

    {
      name: "Switch Child",
      icon: "mdi-swap-horizontal",
      command: async () => {
        const { state } = await globalThis.rmcore.process();
        reactiveCommands.value = state.children.allLatest().map((child) => {
          return {
            name: child.name,
            icon: "mdi-human-child",
            command: async () => {
              await globalThis.rmcore.process({
                children: {
                  activate: child,
                },
              });
              dispatchEvent(new CustomEvent("child-changed"));
            },
          };
        });
      },
    },
    {
      name: "Change Points",
      icon: "mdi-plus",
      command: modals.togglePointsManager,
    },
  ];

  const reactiveCommands = ref(commands);
  return {
    commands: reactiveCommands,
    addCommand: (command) => {
      reactiveCommands.value.push(command);
    },
  };
}
