import Link from 'next/link';
import { Button } from '../components/ui/button';

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
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MenuMate
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          AI-powered restaurant menu recommendations tailored to your preferences
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <h3 className="font-medium">Set up your environment</h3>
                <p className="text-gray-600 text-sm">Configure Supabase, add API keys for Cohere and OpenAI</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <h3 className="font-medium">Create restaurant profiles</h3>
                <p className="text-gray-600 text-sm">Add restaurants and their menu items to the database</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <h3 className="font-medium">Start chatting</h3>
                <p className="text-gray-600 text-sm">Ask our AI for personalized menu recommendations</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Explore Our Restaurants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {restaurants.map((restaurant) => (
              <Link
                key={restaurant.slug}
                href={`/restaurant/${restaurant.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 block"
              >
                <div className="text-4xl mb-3 text-center">{restaurant.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{restaurant.cuisine} Cuisine</p>
                <p className="text-gray-600 text-sm">{restaurant.description}</p>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="text-sm text-gray-500">
          <p>
            Experience the full MenuMate system with our sample restaurants.
            <br />
            Chat with the AI assistant and explore personalized menu recommendations!
          </p>
        </div>
      </div>
    </div>
  )
} 