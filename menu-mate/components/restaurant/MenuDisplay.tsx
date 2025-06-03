'use client';

import { Restaurant, MenuCategory, MenuItem } from '../../lib/types/database';
import MenuItemCard from './MenuItemCard';

interface MenuDisplayProps {
  restaurant: Restaurant;
  menuItemsByCategory: Record<string, { category: MenuCategory; items: MenuItem[] }>;
}

export default function MenuDisplay({ restaurant, menuItemsByCategory }: MenuDisplayProps) {
  const categories = Object.values(menuItemsByCategory).sort(
    (a, b) => a.category.display_order - b.category.display_order
  );

  return (
    <div className="p-6">
      {/* Menu Header */}
      <div className="mb-8 text-center border-b border-amber-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Menu</h2>
        <p className="text-gray-600">Carefully crafted dishes made with love and authentic ingredients</p>
      </div>

      {/* Menu Categories */}
      <div className="space-y-10">
        {categories.map(({ category, items }) => (
          <div key={category.id} className="category-section">
            {/* Category Header */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                <span className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 mr-4"></span>
                {category.name}
                <span className="w-12 h-0.5 bg-gradient-to-l from-orange-400 to-amber-500 ml-4"></span>
              </h3>
              {category.description && (
                <p className="text-gray-600 text-center italic">{category.description}</p>
              )}
            </div>

            {/* Menu Items */}
            <div className="space-y-6">
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`group hover:bg-amber-50 rounded-xl p-4 transition-colors duration-200 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } flex gap-6 items-start`}
                >
                  {/* Food Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-orange-100">
                      <img
                        src={item.image_url || `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h4>
                      <div className="ml-4 flex-shrink-0">
                        <span className="text-2xl font-bold text-amber-600">
                          ${item.price}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Item Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      {item.prep_time && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {item.prep_time} min
                        </div>
                      )}
                      {item.calories && (
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          {item.calories} cal
                        </div>
                      )}
                      {item.popularity_score && item.popularity_score > 0.8 && (
                        <div className="flex items-center gap-1 text-amber-600">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Dietary Tags */}
                    {item.dietary_tags && item.dietary_tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.dietary_tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              tag === 'vegan' ? 'bg-green-100 text-green-800' :
                              tag === 'vegetarian' ? 'bg-green-100 text-green-700' :
                              tag === 'gluten-free' ? 'bg-blue-100 text-blue-800' :
                              tag === 'spicy' ? 'bg-red-100 text-red-800' :
                              tag === 'dairy-free' ? 'bg-purple-100 text-purple-800' :
                              'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {tag.replace('-', ' ')}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 