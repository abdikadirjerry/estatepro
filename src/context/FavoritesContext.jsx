import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext(null);

const STORAGE_KEY = "estatepro-favorites";

function getInitialFavorites() {
  try {
    const savedFavorites = localStorage.getItem(STORAGE_KEY);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  } catch {
    return [];
  }
}

export function FavoritesProvider({ children }) {
  const [favoriteIds, setFavoriteIds] = useState(getInitialFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  function toggleFavorite(propertyId) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(propertyId)
        ? currentIds.filter((id) => id !== propertyId)
        : [...currentIds, propertyId],
    );
  }

  function isFavorite(propertyId) {
    return favoriteIds.includes(propertyId);
  }

  function removeFavorite(propertyId) {
    setFavoriteIds((currentIds) =>
      currentIds.filter((id) => id !== propertyId),
    );
  }

  function clearFavorites() {
    setFavoriteIds([]);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favoriteIds,
        favoritesCount: favoriteIds.length,
        toggleFavorite,
        isFavorite,
        removeFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
