import { notFound } from 'next/navigation';
import { getRestaurantBySlug, getMenuItemsByCategory } from '../../../lib/supabase/database';
import RestaurantHeader from '../../../components/restaurant/RestaurantHeader';
import MenuDisplay from '../../../components/restaurant/MenuDisplay';
import ChatInterface from '../../../components/chat/ChatInterface';

interface RestaurantPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  
  if (!restaurant) {
    notFound();
  }

  const menuItemsByCategory = await getMenuItemsByCategory(restaurant.id);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-amber-900 via-amber-800 to-orange-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-blend-overlay"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
            backgroundColor: 'rgba(146, 64, 14, 0.8)'
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-2xl">
              {restaurant.name}
            </h1>
            <div className="flex items-center justify-center mb-2">
              <div className="flex text-yellow-400 text-xl">
                {'★'.repeat(5)}
              </div>
              <span className="ml-2 text-amber-100">4.8 • 1,247 reviews</span>
            </div>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto font-light">
              {restaurant.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Restaurant Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">About</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {restaurant.description}
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">Address</h4>
                  <p className="text-gray-600 text-sm">
                    {restaurant.address?.street}<br />
                    {restaurant.address?.city}, {restaurant.address?.state} {restaurant.address?.zip}
                  </p>
                </div>
                
                {restaurant.phone && (
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">Phone</h4>
                    <p className="text-gray-600 text-sm">{restaurant.phone}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Operating Hours</h3>
              <div className="space-y-2">
                {restaurant.opening_hours && Object.entries(restaurant.opening_hours).map(([day, hours]: [string, any]) => (
                  <div key={day} className="flex justify-between text-sm">
                    <span className="capitalize font-medium text-gray-700">
                      {day}
                    </span>
                    <span className="text-gray-600">
                      {hours.closed ? 'Closed' : `${hours.open} - ${hours.close}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Menu Display - Center */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <MenuDisplay 
                restaurant={restaurant} 
                menuItemsByCategory={menuItemsByCategory} 
              />
            </div>
          </div>
          
          {/* Chat Interface - Right */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-4">
                  <h3 className="text-lg font-semibold">Get Recommendations</h3>
                  <p className="text-orange-100 text-sm">Tell us what you're looking for and we'll recommend the perfect dish!</p>
                </div>
                <ChatInterface restaurantId={restaurant.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Return all restaurant slugs for static generation
  return [
    { slug: 'bella-vista-italian' },
    { slug: 'spice-garden-indian' },
    { slug: 'sakura-sushi-japanese' },
    { slug: 'el-corazon-mexican' },
    { slug: 'thai-basil-restaurant' },
    { slug: 'golden-dragon-chinese' },
    { slug: 'mediterranean-mezze' },
  ];
} 