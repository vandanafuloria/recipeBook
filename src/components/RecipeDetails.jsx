import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Clock, Users, ChefHat, Star, ArrowLeft } from "lucide-react";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Recipe not found");
        }
        return res.json();
      })
      .then((data) => {
        setRecipe(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="text-orange-400 mt-4 text-lg">
            Loading delicious recipe...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">Error: {error}</p>
          <button
            onClick={() => window.history.back()}
            className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-2 rounded-lg font-semibold"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-orange-400 text-xl">Recipe not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative h-120 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        {/* Back Button */}
        <button className="absolute top-6 left-6 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110">
          <ArrowLeft size={20} />
        </button>

        {/* Recipe Title & Basic Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-2 mb-3">
            {recipe.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {recipe.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < Math.floor(recipe.rating)
                      ? "text-orange-400 fill-current"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-orange-400 font-semibold">
              {recipe.rating}
            </span>
            <span className="text-gray-400">
              ({recipe.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Recipe Info Cards */}
      <div className="px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors">
            <Clock className="text-orange-400 mx-auto mb-2" size={24} />
            <p className="text-gray-400 text-sm">Prep Time</p>
            <p className="text-white font-semibold">
              {recipe.prepTimeMinutes} min
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors">
            <ChefHat className="text-orange-400 mx-auto mb-2" size={24} />
            <p className="text-gray-400 text-sm">Cook Time</p>
            <p className="text-white font-semibold">
              {recipe.cookTimeMinutes} min
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors">
            <Users className="text-orange-400 mx-auto mb-2" size={24} />
            <p className="text-gray-400 text-sm">Servings</p>
            <p className="text-white font-semibold">{recipe.servings}</p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors">
            <div className="text-orange-400 mx-auto mb-2 text-2xl font-bold">
              🔥
            </div>
            <p className="text-gray-400 text-sm">Calories</p>
            <p className="text-white font-semibold">
              {recipe.caloriesPerServing}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center gap-2">
                <ChefHat size={24} />
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-orange-300 transition-colors"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">
                Instructions
              </h2>
              <div className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-black rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-orange-400 transition-colors">
                      {index + 1}
                    </div>
                    <p className="text-gray-300 leading-relaxed pt-1 group-hover:text-white transition-colors">
                      {instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-orange-400 mb-3">
              Recipe Info
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Difficulty:</span>
                <span className="text-white">{recipe.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cuisine:</span>
                <span className="text-white">{recipe.cuisine}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Time:</span>
                <span className="text-white">
                  {recipe.prepTimeMinutes + recipe.cookTimeMinutes} minutes
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-orange-400 mb-3">
              Nutrition
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Calories per serving:</span>
                <span className="text-white">{recipe.caloriesPerServing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Servings:</span>
                <span className="text-white">{recipe.servings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total calories:</span>
                <span className="text-white">
                  {recipe.caloriesPerServing * recipe.servings}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-black px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25">
            Save Recipe
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Share Recipe
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Print Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
