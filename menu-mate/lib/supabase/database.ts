import { supabase } from './client';
import { Restaurant, MenuCategory, MenuItem } from '../types/database';

export async function getRestaurantBySlug(slug: string): Promise<Restaurant | null> {
  try {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching restaurant:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    return null;
  }
}

export async function getMenuCategories(restaurantId: string): Promise<MenuCategory[]> {
  try {
    const { data, error } = await supabase
      .from('menu_categories')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('display_order');

    if (error) {
      console.error('Error fetching menu categories:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching menu categories:', error);
    return [];
  }
}

export async function getMenuItems(restaurantId: string): Promise<MenuItem[]> {
  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('is_available', true);

    if (error) {
      console.error('Error fetching menu items:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return [];
  }
}

export async function getMenuItemsByCategory(restaurantId: string): Promise<Record<string, { category: MenuCategory; items: MenuItem[] }>> {
  try {
    // First get all categories for this restaurant
    const { data: categories, error: categoriesError } = await supabase
      .from('menu_categories')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .order('display_order');

    if (categoriesError) {
      console.error('Error fetching menu categories:', categoriesError);
      return {};
    }

    // Then get all menu items for this restaurant
    const { data: menuItems, error: itemsError } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('is_available', true);

    if (itemsError) {
      console.error('Error fetching menu items:', itemsError);
      return {};
    }

    // Group items by category
    const result: Record<string, { category: MenuCategory; items: MenuItem[] }> = {};
    
    categories?.forEach(category => {
      const categoryItems = menuItems?.filter(item => item.category_id === category.id) || [];
      if (categoryItems.length > 0) {
        result[category.id] = {
          category,
          items: categoryItems.sort((a, b) => (b.popularity_score || 0) - (a.popularity_score || 0))
        };
      }
    });

    return result;
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    return {};
  }
}

export async function searchMenuItems(restaurantId: string, query: string): Promise<MenuItem[]> {
  try {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurant_id', restaurantId)
      .eq('is_available', true)
      .or(`name.ilike.%${query}%,description.ilike.%${query}%`);

    if (error) {
      console.error('Error searching menu items:', error);
      return [];
    }

    return data || [];
  } catch (error) {
    console.error('Error searching menu items:', error);
    return [];
  }
} 