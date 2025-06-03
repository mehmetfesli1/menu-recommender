import { Restaurant } from '../../lib/types/database';
import { MapPin, Phone, Clock } from 'lucide-react';

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

export default function RestaurantHeader({ restaurant }: RestaurantHeaderProps) {
  const formatAddress = (address: any) => {
    if (!address) return '';
    return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
  };

  const formatCuisineTypes = (cuisineTypes: string[]) => {
    return cuisineTypes.map(type => 
      type.charAt(0).toUpperCase() + type.slice(1)
    ).join(', ');
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {restaurant.name}
            </h1>
            
            {restaurant.description && (
              <p className="text-lg text-gray-600 mb-4 max-w-2xl">
                {restaurant.description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              {restaurant.cuisine_type && restaurant.cuisine_type.length > 0 && (
                <div className="flex items-center">
                  <span className="font-medium">
                    {formatCuisineTypes(restaurant.cuisine_type)}
                  </span>
                </div>
              )}
              
              {restaurant.address && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{formatAddress(restaurant.address)}</span>
                </div>
              )}
              
              {restaurant.phone && (
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{restaurant.phone}</span>
                </div>
              )}
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Open Now</span>
              </div>
            </div>
          </div>
          
          {restaurant.logo_url && (
            <div className="mt-4 md:mt-0 md:ml-8">
              <img
                src={restaurant.logo_url}
                alt={`${restaurant.name} logo`}
                className="h-16 w-16 rounded-lg object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 