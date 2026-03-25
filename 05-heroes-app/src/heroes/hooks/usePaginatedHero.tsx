import { useQuery } from "@tanstack/react-query";
import { getHeroByPageAction } from "../actions/get-heroes-by-page.action";

export const usePaginatedHero = (
  page: number,
  limit: number,
  category = "all",
) => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }], // identificador de la query.
    queryFn: () => getHeroByPageAction(+page, +limit, category), //QueryFunction, axios | fetch.
    staleTime: 1000 * 60 * 5, //5 minutos de cache en la peticion http.
  });
};
