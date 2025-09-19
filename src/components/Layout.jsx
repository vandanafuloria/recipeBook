import React from "react";
import { Outlet } from "react-router-dom";
import Recipes from "./Recipes"
import RecipeBookHeader from "./RecipeBookHeader";
import Hero from "./Hero"

export default function Layout() {
  return (
    <>
      <div className="w-full bg-white shadow-md">
        <RecipeBookHeader />
      </div>
      <Hero/>
      <Recipes />
    </>
  );
}
