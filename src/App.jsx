// App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";
import Hero from "./components/Hero";
import React, { useEffect, useState } from "react";


export default function App() {

 

  
  return <>
 
  <Routes>
    <Route  path="/" element={<Layout />}/>

  </Routes>


  </>
}
