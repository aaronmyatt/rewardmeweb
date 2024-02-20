import { onMounted, ref } from "vue";
import useActiveChild from "./useActiveChild";

export default function usePoints() {
  const { activeChild } = useActiveChild();
  const activeChildPoints = ref(0);

  globalThis.addEventListener(
    "pd::pipe::processed",
    (e) => {
      const isPoints = e.detail.points;
      if (isPoints && isPoints.add) {
        getPoints(activeChild).then((points) =>
          activeChildPoints.value = points
        );
      }
    },
  );
  onMounted(() =>
    getPoints(activeChild).then((points) => activeChildPoints.value = points)
  );

  return {
    activeChildPoints,
  };
}

const getPoints = async (activeChild) => {
  const { state } = await rmcore.process();
  return state.points.getTotalFor(activeChild.value.id);
};
