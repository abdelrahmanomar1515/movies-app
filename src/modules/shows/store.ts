import { reactive, watch, watchEffect } from "vue";
import { useShowsApi } from "./api/shows";

export function useShowsStore() {
  const {
    data: shows,
    loading: showsLoading,
    error: showsError,
    getShows,
  } = useShowsApi();

  const store = reactive({
    searchTerm: "",
    showsLoading,
    showsError,
    shows,
  });

  const setSearchTerm = (term: string) => {
    store.searchTerm = term;
  };

  // This will automatically fetch initial data from movies api
  watchEffect(() => getShows(store.searchTerm));

  return { store, setSearchTerm };
}
