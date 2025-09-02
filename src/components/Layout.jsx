import React from "react";
import { Outlet } from "react-router-dom";
import RecipeBookHeader from "./RecipeBookHeader";

export default function Layout() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <RecipeBookHeader />
      </div>

      <div className="pt-20 w-[100%] m-auto">
        <Outlet /> {/* This is where child routes render */}
      </div>
    </>
  );
}
