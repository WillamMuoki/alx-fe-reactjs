 import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // prevent duplicates
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations (mock implementation)
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));
