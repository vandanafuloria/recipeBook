import React, { useState, useEffect } from "react";
import { ChefHat, Utensils, BookOpen, Heart, Search, Menu } from "lucide-react";

const RecipeBookHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => { // this is something new to me.
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-l from-black to-orange-500 py-5"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

 {/***********************************************/}
 
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div
                className={`absolute inset-0 ${
                  isScrolled
                    ? "bg-gradient-to-r from-orange-500 to-orange-600"
                    : "bg-white"
                } rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div
                className={`relative ${
                  isScrolled
                    ? "bg-gradient-to-r from-orange-500 to-orange-600"
                    : "bg-white"
                } p-2.5 rounded-full transform group-hover:rotate-12 transition-all duration-300`}
              >
                <ChefHat
                  className={`w-6 h-6 ${
                    isScrolled ? "text-white" : "text-orange-600"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                Yummy Tales
              </h1>
              <span
                className={`text-xs ${
                  isScrolled ? "text-gray-400" : "text-white/80"
                } flex items-center gap-1`}
              >
                <span>Cooking with</span>
                <span className="font-semibold">Love</span>
              </span>
            </div>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div
              className={`relative group transition-all duration-300 ${
                searchFocused ? "scale-105" : ""
              }`}
            >
              <Search
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                  isScrolled
                    ? searchFocused
                      ? "text-orange-500"
                      : "text-gray-400"
                    : "text-white/70"
                }`}
              />
              <input
                type="text"
                placeholder="Search delicious recipes..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:shadow-lg focus:shadow-orange-500/30 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500"
                    : "bg-gray-800/80 backdrop-blur-sm hover:bg-gray-800 focus:bg-gray-700 text-white placeholder-gray-300 border border-gray-600 focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/30"
                } outline-none`}
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "text-gray-300 hover:text-orange-400 hover:bg-gray-800"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">Recipes</span>
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "text-gray-300 hover:text-orange-400 hover:bg-gray-800"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span className="font-medium">Categories</span>
            </button>
            <button className="group relative">
              <div
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? "text-gray-300 hover:text-orange-400"
                    : "text-white"
                }`}
              >
                <Heart className="w-5 h-5 group-hover:fill-current" />
              </div>
              <span
                className={`absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full ${
                  isScrolled
                    ? "bg-orange-500 text-white"
                    : "bg-white text-orange-600"
                }`}
              >
                3
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-300 hover:bg-gray-800 hover:text-orange-400"
                : "text-white hover:bg-white/20"
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
                isScrolled ? "text-gray-400" : "text-white/70"
              }`}
            />
            <input
              type="text"
              placeholder="Search recipes..."
              className={`w-full pl-10 pr-4 py-2 rounded-full transition-all ${
                isScrolled
                  ? "bg-gray-700 text-white placeholder-gray-300 border border-gray-600"
                  : "bg-gray-800/80 backdrop-blur-sm text-white placeholder-gray-300 border border-gray-600"
              } outline-none`}
            />
          </div>
        </div>
      </div>

      {/* Decorative animated border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 transform origin-left transition-all duration-500 ${
          isScrolled ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>

      {/* Additional glow effect when not scrolled */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-red-600/10 via-black/20 to-orange-600/10 pointer-events-none transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
      ></div>
    </header>
  );
};

export default RecipeBookHeader;
