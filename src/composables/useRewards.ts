import { ref, watch } from "vue";
import { useQuasar } from "quasar";
import useActiveChild from "./useActiveChild";
import useStorage from "./useStorage";

export type Reward = {
  id: string;
  name: string;
  image: string;
  points: 0;
  claimed: false;
  archived: false;
};

export default function useRewards() {
  const $q = useQuasar();
  const { activeChild } = useActiveChild();
  const storage = useStorage();
  const rewards = ref<Reward[]>([]);
  const claimedRewards = ref<Reward[]>([]);

  watch(activeChild, async (newVal, _oldVal) => {
    if (newVal) {
      rewards.value = await getRewards(newVal);
      claimedRewards.value = rewards.value.filter((reward) => reward.claimed);
    }
  });

  globalThis.addEventListener("pd::pipe::processed", async (e) => {
    const isReward = e.detail.rewards;
    if (
      activeChild.value && isReward &&
      (isReward.add || isReward.archive || isReward.claim)
    ) {
      rewards.value = await getRewards(activeChild.value);
      claimedRewards.value = rewards.value.filter((reward: Reward) =>
        reward.claimed
      );
    }
  });

  const claimReward = async (reward: Reward) => {
    const input = {
      rewards: {
        claim: reward,
      },
    };
    const output = await globalThis.rmcore.process(input);

    if (output.errors) {
      console.error(output.errors);
      $q.notify({
        message: output.errors[0].message,
        caption: JSON.stringify(output.rewards),
        color: "negative",
        icon: "mdi-gift",
        timeout: 0,
        closeBtn: true,
        position: "bottom-right",
      });
    } else {
      $q.notify({
        message: "Reward claimed!",
        color: "positive",
        position: "top",
        icon: "mdi-gift",
      });
    }
  };

  const unclaimReward = async (reward: Reward) => {
    const input = {
      rewards: {
        unclaim: reward,
      },
    };
    const output = await globalThis.rmcore.process(input);

    if (output.errors) {
      console.error(output.errors);
      $q.notify({
        message: output.errors[0].message,
        caption: JSON.stringify(output.rewards),
        color: "negative",
        icon: "mdi-gift",
        timeout: 0,
        closeBtn: true,
        position: "bottom-right",
      });
    } else {
      $q.notify({
        message: "Reward claimed!",
        color: "positive",
        position: "top",
        icon: "mdi-gift",
      });
    }
  };

  const archiveReward = async (rewardId: String) => {
    const input = {
      rewards: {
        archive: rewards.value.findLast((reward: Reward) =>
          reward.id === rewardId
        ),
      },
    };
    try {
      await rmcore.process(input);
      $q.notify({
        message: "Reward Archived",
        caption: JSON.stringify(input),
        color: "positive",
        position: "top",
        icon: "mdi-trash-can",
      });
    } catch (e) {
      console.error(e);
      $q.notify({
        message: "Error archiving reward!",
        caption: JSON.stringify(input),
        color: "negative",
        icon: "mdi-gift",
        timeout: 0,
        closeBtn: true,
        position: "bottom-right",
      });
    }
  };

  return {
    rewards,
    claimedRewards,
    claimReward,
    unclaimReward,
    archiveReward,
  };
}

const getRewards = async (activeChild) => {
  try {
    const { state } = await rmcore.process({});
    return state.rewards.getForChild(activeChild.id);
  } catch (e) {
    console.error(e);
    return [];
  }
};
