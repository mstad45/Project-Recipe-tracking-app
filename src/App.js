import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const deleteRecipeHandler = (toDelete) => setRecipes((current) => current.filter((Recipe, index) => index !== toDelete));
  const createRecipehandler = (newRec) => setRecipes((current) => [...current, newRec]);
  
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} createRecipe={createRecipehandler} deleteRecipe={deleteRecipeHandler} />
      <RecipeCreate recipes={recipes} createRecipe={createRecipesHandler} />
    </div>
  );
}

export default App;
