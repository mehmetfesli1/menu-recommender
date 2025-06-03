-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS vector;

-- Enable Row Level Security
ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;

-- Create custom types
CREATE TYPE cuisine_type AS ENUM (
  'italian', 'chinese', 'mexican', 'indian', 'japanese', 'thai', 'french', 
  'american', 'mediterranean', 'korean', 'vietnamese', 'spanish', 'greek'
);

CREATE TYPE dietary_tag AS ENUM (
  'vegan', 'vegetarian', 'gluten-free', 'dairy-free', 'nut-free', 
  'halal', 'kosher', 'keto', 'paleo', 'low-carb', 'high-protein', 'spicy', 'mild'
);

-- Restaurants table
CREATE TABLE restaurants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  cuisine_type cuisine_type[] DEFAULT '{}',
  address JSONB,
  phone VARCHAR(20),
  email VARCHAR(255),
  opening_hours JSONB,
  logo_url TEXT,
  cover_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Menu categories table
CREATE TABLE menu_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Menu items table
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  category_id UUID REFERENCES menu_categories(id) ON DELETE SET NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  image_url TEXT,
  ingredients TEXT[] DEFAULT '{}',
  dietary_tags dietary_tag[] DEFAULT '{}',
  flavor_profile JSONB,
  prep_time INTEGER, -- in minutes
  calories INTEGER,
  nutrition_data JSONB,
  embedding vector(1024), -- Cohere Embed-v3 dimensions
  popularity_score DECIMAL(3,2) DEFAULT 0.0,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User preferences table (for future use)
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID, -- Will be linked to auth.users later
  dietary_restrictions dietary_tag[] DEFAULT '{}',
  favorite_cuisines cuisine_type[] DEFAULT '{}',
  disliked_ingredients TEXT[] DEFAULT '{}',
  price_range JSONB, -- {"min": 0, "max": 100}
  flavor_preferences JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chat sessions table
CREATE TABLE chat_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID, -- Will be linked to auth.users later
  restaurant_id UUID REFERENCES restaurants(id) ON DELETE CASCADE,
  messages JSONB DEFAULT '[]',
  query_metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_restaurants_slug ON restaurants(slug);
CREATE INDEX idx_restaurants_cuisine ON restaurants USING GIN(cuisine_type);
CREATE INDEX idx_menu_items_restaurant ON menu_items(restaurant_id);
CREATE INDEX idx_menu_items_category ON menu_items(category_id);
CREATE INDEX idx_menu_items_dietary ON menu_items USING GIN(dietary_tags);
CREATE INDEX idx_menu_items_price ON menu_items(price);
CREATE INDEX idx_menu_items_available ON menu_items(is_available);
CREATE INDEX idx_menu_items_embedding ON menu_items USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
CREATE INDEX idx_menu_categories_restaurant ON menu_categories(restaurant_id);
CREATE INDEX idx_menu_categories_order ON menu_categories(restaurant_id, display_order);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at triggers
CREATE TRIGGER update_restaurants_updated_at BEFORE UPDATE ON restaurants FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_menu_items_updated_at BEFORE UPDATE ON menu_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_preferences_updated_at BEFORE UPDATE ON user_preferences FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE restaurants ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_sessions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to restaurant data
CREATE POLICY "Allow public read access to restaurants" ON restaurants FOR SELECT USING (true);
CREATE POLICY "Allow public read access to menu_categories" ON menu_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to menu_items" ON menu_items FOR SELECT USING (true);

-- Insert sample data
INSERT INTO restaurants (name, slug, description, cuisine_type, address, phone, opening_hours) VALUES 
(
  'Bella Vista Italian',
  'bella-vista-italian',
  'Authentic Italian cuisine with a modern twist, featuring handmade pasta and wood-fired pizzas.',
  ARRAY['italian']::cuisine_type[],
  '{"street": "123 Main St", "city": "San Francisco", "state": "CA", "zip": "94102"}'::jsonb,
  '(415) 555-0123',
  '{"monday": {"open": "11:00", "close": "22:00"}, "tuesday": {"open": "11:00", "close": "22:00"}, "wednesday": {"open": "11:00", "close": "22:00"}, "thursday": {"open": "11:00", "close": "22:00"}, "friday": {"open": "11:00", "close": "23:00"}, "saturday": {"open": "10:00", "close": "23:00"}, "sunday": {"open": "10:00", "close": "21:00"}}'::jsonb
);

-- Get the restaurant ID for menu items
DO $$
DECLARE
  restaurant_uuid UUID;
  appetizers_uuid UUID;
  mains_uuid UUID;
  desserts_uuid UUID;
BEGIN
  SELECT id INTO restaurant_uuid FROM restaurants WHERE slug = 'bella-vista-italian';
  
  -- Insert menu categories
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (restaurant_uuid, 'Appetizers', 'Start your meal with these delicious appetizers', 1)
  RETURNING id INTO appetizers_uuid;
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (restaurant_uuid, 'Main Courses', 'Our signature pasta dishes and entrees', 2)
  RETURNING id INTO mains_uuid;
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (restaurant_uuid, 'Desserts', 'Sweet endings to your perfect meal', 3)
  RETURNING id INTO desserts_uuid;
  
  -- Insert sample menu items
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (restaurant_uuid, appetizers_uuid, 'Bruschetta Classica', 'Grilled bread topped with fresh tomatoes, basil, and garlic', 12.00, ARRAY['bread', 'tomatoes', 'basil', 'garlic', 'olive oil'], ARRAY['vegetarian']::dietary_tag[], 10, 180, 0.85, true),
  (restaurant_uuid, appetizers_uuid, 'Antipasto Platter', 'Selection of cured meats, cheeses, olives, and roasted vegetables', 18.00, ARRAY['prosciutto', 'salami', 'mozzarella', 'olives', 'roasted peppers'], ARRAY['gluten-free']::dietary_tag[], 5, 420, 0.75, true),
  (restaurant_uuid, mains_uuid, 'Spaghetti Carbonara', 'Traditional Roman pasta with eggs, pecorino cheese, pancetta, and black pepper', 22.00, ARRAY['spaghetti', 'eggs', 'pecorino cheese', 'pancetta', 'black pepper'], ARRAY[]::dietary_tag[], 15, 650, 0.90, true),
  (restaurant_uuid, mains_uuid, 'Margherita Pizza', 'Classic pizza with San Marzano tomatoes, fresh mozzarella, and basil', 18.00, ARRAY['pizza dough', 'san marzano tomatoes', 'mozzarella', 'basil'], ARRAY['vegetarian']::dietary_tag[], 12, 580, 0.88, true),
  (restaurant_uuid, mains_uuid, 'Vegan Mushroom Risotto', 'Creamy risotto with mixed mushrooms, nutritional yeast, and herbs', 20.00, ARRAY['arborio rice', 'mushrooms', 'nutritional yeast', 'vegetable broth', 'herbs'], ARRAY['vegan', 'gluten-free']::dietary_tag[], 25, 480, 0.72, true),
  (restaurant_uuid, mains_uuid, 'Osso Buco', 'Braised veal shanks with gremolata and saffron risotto', 32.00, ARRAY['veal shanks', 'risotto', 'saffron', 'gremolata'], ARRAY[]::dietary_tag[], 45, 780, 0.82, true),
  (restaurant_uuid, desserts_uuid, 'Tiramisu', 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone', 9.00, ARRAY['ladyfingers', 'espresso', 'mascarpone', 'cocoa'], ARRAY['vegetarian']::dietary_tag[], 5, 320, 0.92, true),
  (restaurant_uuid, desserts_uuid, 'Gelato Selection', 'Three scoops of house-made gelato (vanilla, chocolate, strawberry)', 8.00, ARRAY['milk', 'cream', 'sugar', 'natural flavors'], ARRAY['vegetarian', 'gluten-free']::dietary_tag[], 2, 240, 0.80, true);
END $$; 