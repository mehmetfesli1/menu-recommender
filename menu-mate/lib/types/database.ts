import { DietaryTag } from '@/lib/utils/dietary-tags';

export interface Restaurant {
  id: string;
  name: string;
  slug: string;
  description?: string;
  cuisine_type: string[];
  address?: any; // JSON
  phone?: string;
  email?: string;
  opening_hours?: any; // JSON
  logo_url?: string;
  cover_image_url?: string;
  created_at: string;
  updated_at: string;
}

export interface MenuCategory {
  id: string;
  restaurant_id: string;
  name: string;
  description?: string;
  display_order: number;
  created_at: string;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  category_id?: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  ingredients: string[];
  dietary_tags: DietaryTag[];
  flavor_profile?: any; // JSON
  prep_time?: number;
  calories?: number;
  nutrition_data?: any; // JSON
  embedding?: number[]; // Vector embeddings
  popularity_score: number;
  is_available: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserPreferences {
  id: string;
  user_id: string;
  dietary_restrictions: DietaryTag[];
  favorite_cuisines: string[];
  disliked_ingredients: string[];
  price_range?: {
    min: number;
    max: number;
  };
  flavor_preferences?: any; // JSON
  created_at: string;
  updated_at: string;
}

export interface ChatSession {
  id: string;
  user_id?: string;
  restaurant_id: string;
  messages: ChatMessage[];
  query_metadata?: any; // JSON
  created_at: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  recommendations?: MenuItemRecommendation[];
}

export interface MenuItemRecommendation {
  item: MenuItem;
  score: number;
  reason: string;
} 