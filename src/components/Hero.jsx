import React from "react";
import image from "../assets/image.png";

export default function HeroAlternative() {
  return (
    <>
      <div className=" overflow-hidden  relative mt-[60px] md:mt-0">
        <img
          className="w-[100%] m-auto h-80 md:h-96 object-cover"
          src={image}
          alt="hero image"
        />

        
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
          <div className="text-white max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Cook with <span className="text-orange-400">Passion</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              From family favorites to gourmet delights
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Browse Recipes
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                Watch Videos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
