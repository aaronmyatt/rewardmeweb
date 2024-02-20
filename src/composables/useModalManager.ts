import { nextTick, ref } from "vue";

const showAddRewardForm = ref<boolean>(false);
const showAddChildForm = ref<boolean>(false);
const showEditRewardForm = ref<boolean>(false);
const showEditChildForm = ref<boolean>(false);
const showPointsManager = ref<boolean>(false);
export default function useModalManager() {
  return {
    showAddRewardForm,
    showAddChildForm,
    showPointsManager,
    showEditRewardForm,
    showEditChildForm,
    toggleAddRewardForm: () => {
      showAddRewardForm.value = false;
      nextTick(() => {
        showAddRewardForm.value = true;
      });
    },
    toggleAddChildForm: () => {
      showAddChildForm.value = false;
      nextTick(() => {
        showAddChildForm.value = true;
      });
    },
    toggleEditRewardForm: (rewardid: string) => {
      showEditRewardForm.value = false;
      nextTick(() => {
        const params = new URLSearchParams(window.location.search);
        params.set("rewardid", rewardid);
        window.history.replaceState(
          {},
          "",
          `${window.location.pathname}?${params.toString()}`,
        );
        showEditRewardForm.value = true;
      });
    },
    toggleEditChildForm: () => {
      showEditChildForm.value = false;
      nextTick(() => {
        showEditChildForm.value = true;
      });
    },
    togglePointsManager: () => {
      showPointsManager.value = false;
      nextTick(() => {
        showPointsManager.value = true;
      });
    },
  };
}
