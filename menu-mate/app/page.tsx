import Link from 'next/link';

interface Restaurant {
  name: string;
  slug: string;
  description: string;
  cuisine: string;
  emoji: string;
}

const restaurants: Restaurant[] = [
  {
    name: 'Bella Vista Italian',
    slug: 'bella-vista-italian',
    description: 'Authentic Italian cuisine with handmade pasta and wood-fired pizzas',
    cuisine: 'Italian',
    emoji: '🍝'
  },
  {
    name: 'Spice Garden',
    slug: 'spice-garden-indian',
    description: 'Aromatic Indian spices, tandoor specialties, and traditional curries',
    cuisine: 'Indian',
    emoji: '🍛'
  },
  {
    name: 'Sakura Sushi',
    slug: 'sakura-sushi-japanese',
    description: 'Traditional Japanese sushi bar with fresh sashimi and creative rolls',
    cuisine: 'Japanese',
    emoji: '🍣'
  },
  {
    name: 'El Corazón',
    slug: 'el-corazon-mexican',
    description: 'Vibrant Mexican cantina with street tacos and craft margaritas',
    cuisine: 'Mexican',
    emoji: '🌮'
  },
  {
    name: 'Thai Basil',
    slug: 'thai-basil-restaurant',
    description: 'Fresh herbs, bold spices, and traditional Thai dishes',
    cuisine: 'Thai',
    emoji: '🍜'
  },
  {
    name: 'Golden Dragon',
    slug: 'golden-dragon-chinese',
    description: 'Elegant Chinese restaurant with Cantonese cuisine and dim sum',
    cuisine: 'Chinese',
    emoji: '🥟'
  },
  {
    name: 'Mediterranean Mezze',
    slug: 'mediterranean-mezze',
    description: 'Fresh Mediterranean cuisine with mezze platters and grilled seafood',
    cuisine: 'Mediterranean',
    emoji: '🫒'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-amber-900 via-orange-800 to-amber-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2387&q=80')`,
            backgroundColor: 'rgba(146, 64, 14, 0.85)'
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              MenuMate
            </h1>
            <p className="text-2xl md:text-3xl text-amber-100 mb-4 font-light">
              AI-powered menu recommendations
            </p>
            <p className="text-lg md:text-xl text-amber-200 max-w-2xl mx-auto leading-relaxed">
              Discover your perfect meal through intelligent recommendations tailored to your taste, dietary needs, and mood
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center text-amber-100">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Smart AI Recommendations
              </div>
              <div className="flex items-center text-amber-100">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                7 Diverse Cuisines
              </div>
              <div className="flex items-center text-amber-100">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                Dietary Preferences
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">How MenuMate Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Choose Your Restaurant</h3>
              <p className="text-gray-600 leading-relaxed">Browse our carefully curated selection of restaurants from around the world, each with authentic dishes and detailed descriptions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tell Us Your Preferences</h3>
              <p className="text-gray-600 leading-relaxed">Chat with our AI assistant about your dietary needs, flavor preferences, budget, or mood. We understand what you're craving.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Get Perfect Recommendations</h3>
              <p className="text-gray-600 leading-relaxed">Receive personalized dish recommendations with detailed information about ingredients, preparation time, and nutritional data.</p>
            </div>
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Restaurants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Italian trattorias to Japanese sushi bars, discover authentic flavors from around the world with our AI-powered recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.slug}
                href={`/restaurant/${restaurant.slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                    {restaurant.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {restaurant.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-sm font-medium rounded-full">
                      {restaurant.cuisine} Cuisine
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {restaurant.description}
                  </p>
                  
                  {/* Restaurant features */}
                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      4.8 Rating
                    </div>
                    <div className="text-amber-600 font-medium group-hover:text-amber-700">
                      View Menu →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose MenuMate?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our AI-powered system understands your preferences and dietary needs to recommend the perfect dishes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Smart Recommendations</h3>
              <p className="text-gray-600 text-sm">AI analyzes your preferences for perfect matches</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Dietary Aware</h3>
              <p className="text-gray-600 text-sm">Filters for vegan, gluten-free, and all dietary needs</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real-time Chat</h3>
              <p className="text-gray-600 text-sm">Interactive conversation for personalized help</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Detailed Info</h3>
              <p className="text-gray-600 text-sm">Ingredients, calories, prep time, and more</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Find Your Perfect Meal?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start exploring our restaurants and let our AI help you discover dishes you'll love. Whether you're craving comfort food or looking to try something new, we've got you covered.
          </p>
          <Link
            href="/restaurant/bella-vista-italian"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Start Exploring
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
} 