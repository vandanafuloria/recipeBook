// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import Hero from "./components/Hero";
import React, { useEffect, useState } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes") // your API URL
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Hero />
              <Recipes recipes={recipes} />
            </>
          }
        />
        <Route
          path="recipes/:id"
          element={<RecipeDetails recipes={recipes} />}
        />
      </Route>
    </Routes>
  );
}
