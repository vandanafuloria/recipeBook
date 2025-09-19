import React,  {useState, useEffect} from "react"
import { Link } from "react-router-dom"; 
export default function Recipes( ) {
 
 const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(recipes);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
     
      <div className="px-4 py-8 md:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black mb-4">
          Discover the taste of happiness
        </h1>
        <p className="font-light italic text-gray-600 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
          Discover hand-picked recipes, from quick everyday meals to festive
          feasts — all in one place.
        </p>
      </div>

  
      {loading ? (
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
            {[...Array(8)].map((_,index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-pulse">
                <div className="aspect-[4/3] bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="flex justify-start mt-2 gap-2">
                    <div className="bg-gray-300 w-[40px] h-[20px] rounded-2xl"></div>
                    <div className="bg-gray-300 w-[40px] h-[20px] rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>

          <div className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group-hover:scale-[1.02]">
             
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                   
                    style={{ backgroundColor: '#f3f4f6' }}
                    
                  />
                </div>

             
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {recipe.name}
                  </h2>

             
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      {recipe.prepTimeMinutes && (
                        <div className="flex items-center gap-1">
                         
                          <span>{recipe.prepTimeMinutes}min</span>
                        </div>
                      )}

                      
                    </div>

              
                  </div>

                
                  {recipe.tags && recipe.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {recipe.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full capitalize"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-3">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                      Want to Try
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

         
            {recipes.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🍳</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No recipes found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or check back later for new recipes!
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
