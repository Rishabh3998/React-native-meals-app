import React, { createContext, FC, ReactNode, useState } from "react";

interface FavoritesContextProps {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextProps>({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

interface FavoritesContextProviderProps {
  children: ReactNode;
}

const FavoritesContextProvider: FC<FavoritesContextProviderProps> = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favoriteMeals, setFavoriteMeals] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavoriteMeals((prevIds) => [...prevIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMeals((prevIds) => prevIds.filter((meal) => meal !== id));
  };

  const value: FavoritesContextProps = {
    ids: favoriteMeals,
    addFavorite,
    removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
