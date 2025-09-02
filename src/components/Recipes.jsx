import React, { useEffect, useState } from "react";

// Fancy Shimmer placeholder component
function Shimmer() {
  return (
    <div className="w-full h-40 rounded-t-2xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent" />
    </div>
  );
}

export default function Recipes({ recipes }) {
  // Track loaded images
  const [loaded, setLoaded] = useState({});

  const handleImageLoad = (id) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div>
      <h1>Discover Delicious Recipes Every Day</h1>
      <p>
        Explore healthy, tasty, and easy-to-make recipes for every occasion.
      </p>

      <div className="recipes-container flex flex-wrap gap-5 justify-center mt-8 md:gap-10">
        {recipes.map((recipe) => (
          <div
            className="recipe-card w-[150px] border rounded-2xl overflow-hidden shadow-lg md:w-[300px] hover:scale-105 transition-transform duration-300"
            key={recipe.id}
          >
            <div className="relative w-full">
              {!loaded[recipe.id] && <Shimmer />}
              <img
                className={`w-full object-cover transition-opacity duration-300 rounded-t-2xl md:h-[300px] ${
                  loaded[recipe.id] ? "opacity-100" : "opacity-0"
                }`}
                src={recipe.image}
                alt={recipe.name}
                onLoad={() => handleImageLoad(recipe.id)}
              />
            </div>
            <h1 className="font-semibold text-lg p-3">{recipe.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
