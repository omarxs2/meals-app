import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {
    },
    removeFavorite: (id) => {
    }
});

function FavoriteContextProvider({ children }) {

    const [favIds, setFavsIds] = useState([]);
    const addFav = (id) => {
        setFavsIds((currentFavIds) => [...currentFavIds, id])
    }
    const removeFav = (id) => {
        setFavsIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id))
    }

    const value = {
        ids: favIds,
        addFav: addFav,
        removeFav: removeFav
    }
    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>

}

export default FavoriteContextProvider;