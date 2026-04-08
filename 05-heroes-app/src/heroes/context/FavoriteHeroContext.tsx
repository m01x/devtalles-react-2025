import { createContext, useState, type PropsWithChildren } from "react";
import type { Hero } from "../interfaces/Hero.interface";

interface FavoriteHeroContext {
  //states
  favorites: Hero[];
  favoriteCount: number;

  //Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

export const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<Hero[]>([]);

  const toggleFavorite = (hero: Hero) => {
    const heroExist = favorites.find((h) => h.id === hero.id);

    if (heroExist) {
      const newFavorites = favorites.filter((h) => h.id !== hero.id);
      setFavorites(newFavorites);
      return;
    }
  };

  return (
    <FavoriteHeroContext
      value={{
        //states
        favorites: [],
        favoriteCount: 0,
        //methods
        isFavorite: () => {},
        toggleFavorite: (hero) => {},
      }}
    >
      {children}
    </FavoriteHeroContext>
  );
};
