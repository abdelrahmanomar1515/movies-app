import { useFetch } from "@/utils/use-fetch";
import { Show } from "../types";
import { SHOWS_URL } from "./constants";

export function useShowsDetailsApi() {
  const { loading, data, error, getData } = useFetch<Show[]>();

  const getShowDetails = (id: string | number) => getData(`${SHOWS_URL}/${id}`);

  return { loading, data, error, getShowDetails };
}
