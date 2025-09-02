import "./App.css";
import React, { useEffect, useState } from "react";
import RecipeBookHeader from "./components/RecipeBookHeader";
import Hero from "./components/Hero";

function App() {
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    getRecipe();
  }, []);

  async function getRecipe() {
    try {
      const recipe = await fetch("https://dummyjson.com/recipes");
      const data = await recipe.json();
      console.log(data);
      setRecipes(data.recipes);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="rounded-4xl w-[90%] m-auto">
        <RecipeBookHeader />
        <Hero />
      </div>
    </>
  );
}

export default App;
