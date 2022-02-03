import { useFetch } from "@/utils/use-fetch";
import { Show } from "../types";
import { SHOWS_URL } from "./constants";

export function useShowsApi() {
  const { loading, data, error, getData } = useFetch<Show[]>();

  const getShows = (searchTerm: string) => {
    if (searchTerm.length) {
      getData(`${SHOWS_URL}?q=${searchTerm}`);
    } else {
      getData(`${SHOWS_URL}`);
    }
  };

  return { loading, data, error, getShows };
}
