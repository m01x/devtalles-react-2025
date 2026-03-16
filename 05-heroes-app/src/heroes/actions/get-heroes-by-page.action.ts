import { heroApi } from "../api/hero.api"
import type { HeroesResponse } from "../interfaces/get-heroes.response";


const BASE_URL: string = import.meta.env.VITE_API_URL;

export const getHeroByPageAction = async():Promise<HeroesResponse> => {

  const {data} = await heroApi.get<HeroesResponse>(`/`);

  const heroes = data.heroes.map((hero)=>({
    ...hero,
    image: `${BASE_URL}/images/${hero.image}`,
  }));

  return {
    ...data,
    heroes
  
  };

}