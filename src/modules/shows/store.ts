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
    selectedGenres: [] as Genre[],
    showsLoading,
    showsError,
    showsResponse,
  });

  // This will automatically fetch initial data from shows api
  getShows();

  const setSearchTerm = (term: string) => {
    store.searchTerm = term;
  };

  const setSelectedGenres = (genres: Genre[]) => {
    store.selectedGenres = genres;
  };

  const shows = computed(() => {
    if (!store.showsResponse) {
      return [];
    }
    return store.showsResponse.filter(
      (show) =>
        showByNameFilter(show, store.searchTerm.trim()) &&
        showByGenresFilter(show, store.selectedGenres)
    );
  });

  return { store, shows, setSearchTerm, setSelectedGenres };
}

export const GENRES = Object.values(Genre);

const showByNameFilter = (show: Show, searchTerm: string): boolean =>
  !searchTerm ||
  show.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());

const showByGenresFilter = (show: Show, genres: Genre[]) =>
  !genres ||
  !genres.length ||
  show.genres.some((genre) => genres.includes(genre));
