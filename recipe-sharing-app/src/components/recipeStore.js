 // src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],

  // Replace all recipes at once
  setRecipes: (recipes) => set({ recipes }),

  // Add a new recipe to the list
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),
}));

export default useRecipeStore;
