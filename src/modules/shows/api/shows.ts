import { useFetch } from "@/utils/use-fetch";
import { Show } from "../types";
import { SHOWS_URL } from "./constants";

export function useShowsApi() {
  const { loading, data, error, getData } = useFetch<Show[]>();

  const getShows = () => getData(SHOWS_URL);

  return { loading, data, error, getShows };
}
