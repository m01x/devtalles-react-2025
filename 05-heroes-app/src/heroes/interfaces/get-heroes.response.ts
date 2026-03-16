import type { Hero } from "./Hero.interface";

export interface HeroesResponse {
    total:  number;
    pages:  number;
    heroes: Hero[];
}


