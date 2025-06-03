import { MenuItem } from '../../lib/types/database';
import { DietaryTagComponent } from '../shared/DietaryTag';
import { Clock, Users } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
            <span className="text-lg font-bold text-gray-900 ml-4">
              {formatPrice(item.price)}
            </span>
          </div>
          
          {item.description && (
            <p className="text-gray-600 mb-3 leading-relaxed">
              {item.description}
            </p>
          )}
          
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mb-3">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
                Ingredients
              </p>
              <p className="text-sm text-gray-600">
                {item.ingredients.join(', ')}
              </p>
            </div>
          )}
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Dietary Tags */}
            {item.dietary_tags && item.dietary_tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {item.dietary_tags.map((tag, index) => (
                  <DietaryTagComponent key={index} tag={tag} size="sm" />
                ))}
              </div>
            )}
            
            {/* Prep Time */}
            {item.prep_time && (
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                <span>{item.prep_time} min</span>
              </div>
            )}
            
            {/* Calories */}
            {item.calories && (
              <div className="flex items-center text-xs text-gray-500">
                <Users className="h-3 w-3 mr-1" />
                <span>{item.calories} cal</span>
              </div>
            )}
            
            {/* Popularity Score */}
            {item.popularity_score > 0.8 && (
              <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                Popular
              </div>
            )}
          </div>
        </div>
        
        {item.image_url && (
          <div className="ml-6 flex-shrink-0">
            <img
              src={item.image_url}
              alt={item.name}
              className="h-20 w-20 rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
} 