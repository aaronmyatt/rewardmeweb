export default function useAssetFromStorage() {
  return {
    save: async (data: File, name: String, bucket: String, user_id: String) => {
      const output = await globalThis.rmcore.process({
        storage: {
          file: {
            name,
            data,
            bucket,
            user_id,
          },
        },
      });
      return output;
    },
    fromFullPath: (path: string) => {
      const prefix =
        "https://kftvyjuvltnfazpoujyb.supabase.co/storage/v1/object/public/";
      if (path.includes(prefix)) return path;
      return prefix +
        path;
    },
  };
}
