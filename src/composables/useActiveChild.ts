import { onMounted, ref } from "vue";
import useStorage from "src/composables/useStorage";

const activeChild = ref({
  id: "",
  name: "",
  avatar: "",
});

export default function useActiveChild() {
  const storage = useStorage();

  globalThis.addEventListener("pd::pipe::processed", async (e) => {
    const isChild = e.detail.children;
    if (
      isChild && (isChild.add || isChild.archive)
    ) {
      rmcore.process({ children: { activate: {} } }).then((results) => {
        activeChild.value = results.data;
      });
    }
  });

  onMounted(async () => {
    rmcore.process({ children: { activate: {} } }).then((results) => {
      if (results.errors) {
        console.error(results.errors);
        return;
      } else {
        activeChild.value = results.data;
      }
    });
  });

  return { activeChild };
}
