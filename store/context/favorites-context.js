import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});

function FavoritesContextProvider({children}) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds((prevIds) => [...prevIds, id]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds((prevIds) => prevIds.filter((mealId) => mealId !== id));
    }

    function itemIsFavorite(id) {
        return favoriteMealIds.includes(id);
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        itemIsFavorite: itemIsFavorite,
    }

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;