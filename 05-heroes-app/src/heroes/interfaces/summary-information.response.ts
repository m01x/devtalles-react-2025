import type { Hero } from "./Hero.interface";

export interface SummaryInformationResponse {
    totalHeroes:   number;
    strongestHero: Hero;
    smartestHero:  Hero;
    heroCount:     number;
    villainCount:  number;
}

