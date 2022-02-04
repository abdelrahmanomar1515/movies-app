import { computed, reactive } from "vue";
import { useShowsApi } from "./api/shows";
import { Genre, Show } from "./types";

export function useShowsStore() {
  const {
    data: showsResponse,
    loading: showsLoading,
    error: showsError,
    getShows,
  } = useShowsApi();

  const store = reactive({
    searchTerm: "",
    selectedGenre: "" as Genre,
    showsLoading,
    showsError,
    showsResponse,
  });

  // This will automatically fetch initial data from movies api
  getShows();

  const setSearchTerm = (term: string) => {
    store.searchTerm = term;
  };

  const shows = computed(() => {
    if (!store.showsResponse) {
      return [];
    }
    return store.showsResponse.filter(
      (show) =>
        showByNameFilter(show, store.searchTerm.trim()) &&
        showByGenreFilter(show, store.selectedGenre)
    );
  });

  return { store, shows, setSearchTerm };
}

const showByNameFilter = (show: Show, searchTerm: string): boolean =>
  !searchTerm ||
  show.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());

const showByGenreFilter = (show: Show, genre: Genre) =>
  !genre || show.genres.includes(genre);
