import React from "react";
import image from "../assets/image.png";

// Method 1: Using background-image with Tailwind classes
// export default function Hero() {
//   return (
//     <>
//       <div
//         className="rounded-3xl overflow-hidden mt-[10rem] h-80 md:h-96 relative bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${image})` }}
//       >
//         {/* Dark overlay for better text readability */}
//         <div className="absolute inset-0 bg-black bg-opacity-40"></div>

//         {/* Content overlay */}
//         <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
//           <div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               Delicious Recipes
//             </h1>
//             <p className="text-lg md:text-xl mb-6">
//               Discover amazing flavors from around the world
//             </p>
//             <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
//               Explore Recipes
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// Method 2: Using img tag with absolute positioning for text overlay
export default function HeroAlternative() {
  return (
    <>
      <div className="rounded-3xl overflow-hidden mt-[10rem] relative">
        <img
          className="w-full h-80 md:h-96 object-cover"
          src={image}
          alt="hero image"
        />

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Text content */}
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

// Method 3: Using Tailwind's arbitrary value for background image
// export default function HeroArbitraryBg() {
//   const backgroundStyle = {
//     backgroundImage: `url(${image})`,
//   };

//   return (
//     <>
//       <div
//         className="rounded-3xl overflow-hidden mt-[10rem] h-80 md:h-96 relative bg-cover bg-center"
//         style={backgroundStyle}
//       >
//         {/* Colored overlay with opacity */}
//         <div className="absolute inset-0 bg-orange-900 bg-opacity-30"></div>

//         <div className="relative z-10 flex items-center justify-center h-full text-center">
//           <div className="text-white px-6">
//             <h1 className="text-4xl md:text-6xl font-bold mb-4">
//               <span className="block">Taste the</span>
//               <span className="text-yellow-300">Extraordinary</span>
//             </h1>
//             <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
//               Elevate your cooking with our curated collection of recipes from
//               master chefs
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-full font-bold text-lg transition-colors shadow-lg">
//                 Start Cooking
//               </button>
//               <button className="text-white border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // Method 4: Multiple background layers with food-themed content
// export default function HeroFoodTheme() {
//   return (
//     <>
//       <div className="rounded-3xl overflow-hidden mt-[10rem] relative">
//         {/* Background image */}
//         <div
//           className="w-full h-80 md:h-96 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${image})` }}
//         ></div>

//         {/* Multiple overlay gradients for depth */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 to-transparent"></div>

//         {/* Content positioned at bottom */}
//         <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
//           <div className="text-white">
//             <div className="flex items-center gap-2 mb-3">
//               <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                 🔥 HOT
//               </span>
//               <span className="text-orange-300 font-medium">
//                 Featured Recipe
//               </span>
//             </div>
//             <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
//               Master Chef's Special
//             </h1>
//             <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl">
//               Discover the secret ingredients that make every dish unforgettable
//             </p>
//             <div className="flex flex-wrap items-center gap-4">
//               <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-lg">
//                 Get Recipe
//               </button>
//               <div className="text-sm opacity-75 flex items-center gap-4">
//                 <span>⭐ 4.9 Rating</span>
//                 <span>👥 2.1k Cooks</span>
//                 <span>⏱️ 30 mins</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
