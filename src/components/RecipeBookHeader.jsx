import React, { useState, useEffect } from "react";
import { ChefHat, Utensils, BookOpen, Heart, Search, Menu } from "lucide-react";

const RecipeBookHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [currentEmoji, setCurrentEmoji] = useState(0);

  const foodEmojis = ["🍳", "🥘", "🍰", "🥗", "🍜", "🍕", "🥐", "🍣"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEmoji((prev) => (prev + 1) % foodEmojis.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-5"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div
                className={`absolute inset-0 ${
                  isScrolled
                    ? "bg-gradient-to-r from-pink-400 to-purple-400"
                    : "bg-white"
                } rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div
                className={`relative ${
                  isScrolled
                    ? "bg-gradient-to-r from-pink-500 to-purple-500"
                    : "bg-white"
                } p-2.5 rounded-full transform group-hover:rotate-12 transition-all duration-300`}
              >
                <ChefHat
                  className={`w-6 h-6 ${
                    isScrolled ? "text-white" : "text-purple-600"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                    : "text-white"
                }`}
              >
                Yummy Tales
              </h1>
              <span
                className={`text-xs ${
                  isScrolled ? "text-gray-500" : "text-white/80"
                } flex items-center gap-1`}
              >
                <span>Cooking with</span>
                <span className="inline-block animate-bounce">
                  {foodEmojis[currentEmoji]}
                </span>
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
                      ? "text-purple-500"
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
                    ? "bg-gray-100 hover:bg-gray-50 focus:bg-white focus:shadow-lg focus:shadow-purple-200/50 text-gray-700 placeholder-gray-400"
                    : "bg-white/20 backdrop-blur-sm hover:bg-white/30 focus:bg-white focus:text-gray-700 text-white placeholder-white/70"
                } outline-none`}
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">Recipes</span>
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span className="font-medium">Categories</span>
            </button>
            <button className="group relative">
              <div
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled ? "text-gray-600 hover:text-red-500" : "text-white"
                }`}
              >
                <Heart className="w-5 h-5 group-hover:fill-current" />
              </div>
              <span
                className={`absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full ${
                  isScrolled
                    ? "bg-red-500 text-white"
                    : "bg-white text-purple-600"
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
                ? "text-gray-600 hover:bg-gray-100"
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
                  ? "bg-gray-100 text-gray-700 placeholder-gray-400"
                  : "bg-white/20 backdrop-blur-sm text-white placeholder-white/70"
              } outline-none`}
            />
          </div>
        </div>
      </div>

      {/* Decorative animated border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 transform origin-left transition-all duration-500 ${
          isScrolled ? "scale-x-100" : "scale-x-0"
        }`}
      ></div>
    </header>
  );
};

export default RecipeBookHeader;
