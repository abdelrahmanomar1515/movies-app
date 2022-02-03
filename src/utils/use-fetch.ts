import { ref } from "vue";

export function useFetch<T>() {
  const data = ref<T | null>(null);
  const loading = ref(false);
  const error = ref<any>(null);

  const getData = async (
    input: RequestInfo,
    init?: RequestInit | undefined
  ) => {
    loading.value = true;
    data.value = null;
    error.value = null;
    try {
      const response = await fetch(input, init);
      data.value = await response.json();
    } catch (err) {
      error.value = err;
    }
    loading.value = false;
  };

  return {
    data,
    loading,
    error,
    getData,
  };
}
