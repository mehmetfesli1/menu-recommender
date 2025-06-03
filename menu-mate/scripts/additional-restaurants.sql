-- Additional 6 Restaurants with Diverse Cuisines
-- Run this after the main schema.sql

-- 1. SPICE GARDEN (Indian)
INSERT INTO restaurants (name, slug, description, cuisine_type, address, phone, opening_hours) VALUES 
(
  'Spice Garden',
  'spice-garden-indian',
  'Authentic Indian cuisine featuring aromatic spices, tandoor specialties, and traditional curries from across India.',
  ARRAY['indian']::cuisine_type[],
  '{"street": "456 Mission St", "city": "San Francisco", "state": "CA", "zip": "94105"}'::jsonb,
  '(415) 555-0234',
  '{"monday": {"open": "17:00", "close": "22:30"}, "tuesday": {"open": "17:00", "close": "22:30"}, "wednesday": {"open": "17:00", "close": "22:30"}, "thursday": {"open": "17:00", "close": "22:30"}, "friday": {"open": "17:00", "close": "23:00"}, "saturday": {"open": "17:00", "close": "23:00"}, "sunday": {"open": "17:00", "close": "22:00"}}'::jsonb
);

-- 2. SAKURA SUSHI (Japanese)  
INSERT INTO restaurants (name, slug, description, cuisine_type, address, phone, opening_hours) VALUES 
(
  'Sakura Sushi',
  'sakura-sushi-japanese',
  'Traditional Japanese sushi bar offering fresh sashimi, creative rolls, and authentic Japanese dishes.',
  ARRAY['japanese']::cuisine_type[],
  '{"street": "789 Geary Blvd", "city": "San Francisco", "state": "CA", "zip": "94118"}'::jsonb,
  '(415) 555-0345',
  '{"monday": {"closed": true}, "tuesday": {"open": "17:30", "close": "22:00"}, "wednesday": {"open": "17:30", "close": "22:00"}, "thursday": {"open": "17:30", "close": "22:00"}, "friday": {"open": "17:30", "close": "23:00"}, "saturday": {"open": "17:30", "close": "23:00"}, "sunday": {"open": "17:30", "close": "21:30"}}'::jsonb
);

-- 3. EL CORAZÓN (Mexican)
INSERT INTO restaurants (name, slug, description, cuisine_type, address, phone, opening_hours) VALUES 
(
  'El Corazón',
  'el-corazon-mexican',
  'Vibrant Mexican cantina serving street tacos, fresh guacamole, and craft margaritas with authentic flavors.',
  ARRAY['mexican']::cuisine_type[],
  '{"street": "321 Valencia St", "city": "San Francisco", "state": "CA", "zip": "94110"}'::jsonb,
  '(415) 555-0456',
  '{"monday": {"open": "11:30", "close": "22:00"}, "tuesday": {"open": "11:30", "close": "22:00"}, "wednesday": {"open": "11:30", "close": "22:00"}, "thursday": {"open": "11:30", "close": "22:00"}, "friday": {"open": "11:30", "close": "23:30"}, "saturday": {"open": "11:00", "close": "23:30"}, "sunday": {"open": "11:00", "close": "21:30"}}'::jsonb
);

-- 4. THAI BASIL (Thai)
INSERT INTO restaurants (name, slug, description, cuisine_type, address, phone, opening_hours) VALUES 
(
  'Thai Basil',
  'thai-basil-restaurant',
  'Aromatic Thai cuisine featuring fresh herbs, bold spices, and traditional dishes from Bangkok to Chiang Mai.',
  ARRAY['thai']::cuisine_type[],
  '{"street": "567 Irving St", "city": "San Francisco", "state": "CA", "zip": "94122"}'::jsonb,
  '(415) 555-0567',
  '{"monday": {"open": "11:00", "close": "21:30"}, "tuesday": {"open": "11:00", "close": "21:30"}, "wednesday": {"open": "11:00", "close": "21:30"}, "thursday": {"open": "11:00", "close": "21:30"}, "friday": {"open": "11:00", "close": "22:00"}, "saturday": {"open": "11:00", "close": "22:00"}, "sunday": {"open": "12:00", "close": "21:30"}}'::jsonb
);

-- 5. GOLDEN DRAGON (Chinese)
INSERT INTO restaurants (name, slug, description, cuisine_type, address, phone, opening_hours) VALUES 
(
  'Golden Dragon',
  'golden-dragon-chinese',
  'Elegant Chinese restaurant specializing in Cantonese cuisine, dim sum, and Peking duck with modern presentation.',
  ARRAY['chinese']::cuisine_type[],
  '{"street": "888 Grant Ave", "city": "San Francisco", "state": "CA", "zip": "94108"}'::jsonb,
  '(415) 555-0678',
  '{"monday": {"open": "11:00", "close": "22:00"}, "tuesday": {"open": "11:00", "close": "22:00"}, "wednesday": {"open": "11:00", "close": "22:00"}, "thursday": {"open": "11:00", "close": "22:00"}, "friday": {"open": "11:00", "close": "22:30"}, "saturday": {"open": "10:30", "close": "22:30"}, "sunday": {"open": "10:30", "close": "21:30"}}'::jsonb
);

-- 6. MEDITERRANEAN MEZZE (Mediterranean)
INSERT INTO restaurants (name, slug, description, cuisine_type, address, phone, opening_hours) VALUES 
(
  'Mediterranean Mezze',
  'mediterranean-mezze',
  'Fresh Mediterranean cuisine featuring mezze platters, grilled seafood, and healthy dishes from the Greek islands.',
  ARRAY['mediterranean', 'greek']::cuisine_type[],
  '{"street": "234 Fillmore St", "city": "San Francisco", "state": "CA", "zip": "94117"}'::jsonb,
  '(415) 555-0789',
  '{"monday": {"open": "11:30", "close": "22:00"}, "tuesday": {"open": "11:30", "close": "22:00"}, "wednesday": {"open": "11:30", "close": "22:00"}, "thursday": {"open": "11:30", "close": "22:00"}, "friday": {"open": "11:30", "close": "22:30"}, "saturday": {"open": "11:00", "close": "22:30"}, "sunday": {"open": "11:00", "close": "21:30"}}'::jsonb
);

-- Now insert menu categories and items for each restaurant
DO $$
DECLARE
  -- Restaurant UUIDs
  spice_garden_uuid UUID;
  sakura_sushi_uuid UUID;
  el_corazon_uuid UUID;
  thai_basil_uuid UUID;
  golden_dragon_uuid UUID;
  med_mezze_uuid UUID;
  
  -- Category UUIDs
  category_uuid UUID;
  category_uuid_2 UUID;
  category_uuid_3 UUID;
  category_uuid_4 UUID;
BEGIN
  -- Get restaurant IDs
  SELECT id INTO spice_garden_uuid FROM restaurants WHERE slug = 'spice-garden-indian';
  SELECT id INTO sakura_sushi_uuid FROM restaurants WHERE slug = 'sakura-sushi-japanese';
  SELECT id INTO el_corazon_uuid FROM restaurants WHERE slug = 'el-corazon-mexican';
  SELECT id INTO thai_basil_uuid FROM restaurants WHERE slug = 'thai-basil-restaurant';
  SELECT id INTO golden_dragon_uuid FROM restaurants WHERE slug = 'golden-dragon-chinese';
  SELECT id INTO med_mezze_uuid FROM restaurants WHERE slug = 'mediterranean-mezze';

  -- === SPICE GARDEN (Indian) ===
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (spice_garden_uuid, 'Appetizers', 'Traditional Indian starters and street food', 1) RETURNING id INTO category_uuid;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (spice_garden_uuid, category_uuid, 'Samosas', 'Crispy pastries filled with spiced potatoes and peas', 8.00, ARRAY['pastry', 'potatoes', 'peas', 'cumin', 'coriander'], ARRAY['vegetarian', 'vegan']::dietary_tag[], 12, 220, 0.88, true),
  (spice_garden_uuid, category_uuid, 'Chicken Tikka', 'Marinated chicken grilled in tandoor with spices', 12.00, ARRAY['chicken', 'yogurt', 'garam masala', 'turmeric'], ARRAY['gluten-free']::dietary_tag[], 20, 280, 0.85, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (spice_garden_uuid, 'Curries', 'Traditional Indian curries and gravies', 2) RETURNING id INTO category_uuid_2;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (spice_garden_uuid, category_uuid_2, 'Butter Chicken', 'Creamy tomato-based curry with tender chicken', 18.00, ARRAY['chicken', 'tomatoes', 'cream', 'fenugreek', 'garam masala'], ARRAY[]::dietary_tag[], 25, 520, 0.92, true),
  (spice_garden_uuid, category_uuid_2, 'Dal Makhani', 'Rich black lentils cooked with butter and spices', 14.00, ARRAY['black lentils', 'butter', 'cream', 'tomatoes', 'spices'], ARRAY['vegetarian']::dietary_tag[], 30, 380, 0.78, true),
  (spice_garden_uuid, category_uuid_2, 'Palak Paneer', 'Fresh spinach curry with cottage cheese cubes', 16.00, ARRAY['spinach', 'paneer', 'onions', 'garlic', 'ginger'], ARRAY['vegetarian', 'gluten-free']::dietary_tag[], 20, 320, 0.82, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (spice_garden_uuid, 'Breads & Rice', 'Freshly baked breads and aromatic rice dishes', 3) RETURNING id INTO category_uuid_3;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (spice_garden_uuid, category_uuid_3, 'Garlic Naan', 'Soft flatbread with garlic and herbs', 4.00, ARRAY['flour', 'yogurt', 'garlic', 'herbs'], ARRAY['vegetarian']::dietary_tag[], 8, 180, 0.90, true),
  (spice_garden_uuid, category_uuid_3, 'Biryani', 'Fragrant basmati rice with spiced lamb', 22.00, ARRAY['basmati rice', 'lamb', 'saffron', 'cardamom', 'cinnamon'], ARRAY[]::dietary_tag[], 35, 680, 0.87, true);

  -- === SAKURA SUSHI (Japanese) ===
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (sakura_sushi_uuid, 'Sashimi', 'Fresh raw fish, expertly sliced', 1) RETURNING id INTO category_uuid;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (sakura_sushi_uuid, category_uuid, 'Salmon Sashimi', 'Premium Atlantic salmon, 6 pieces', 16.00, ARRAY['salmon'], ARRAY['gluten-free']::dietary_tag[], 5, 220, 0.89, true),
  (sakura_sushi_uuid, category_uuid, 'Tuna Sashimi', 'Yellowfin tuna, 6 pieces', 18.00, ARRAY['tuna'], ARRAY['gluten-free']::dietary_tag[], 5, 190, 0.91, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (sakura_sushi_uuid, 'Sushi Rolls', 'Creative and traditional rolls', 2) RETURNING id INTO category_uuid_2;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (sakura_sushi_uuid, category_uuid_2, 'California Roll', 'Crab, avocado, cucumber with sesame seeds', 12.00, ARRAY['crab', 'avocado', 'cucumber', 'nori', 'sushi rice'], ARRAY[]::dietary_tag[], 10, 280, 0.85, true),
  (sakura_sushi_uuid, category_uuid_2, 'Dragon Roll', 'Shrimp tempura, eel, avocado with eel sauce', 16.00, ARRAY['shrimp', 'eel', 'avocado', 'tempura batter'], ARRAY[]::dietary_tag[], 15, 420, 0.88, true),
  (sakura_sushi_uuid, category_uuid_2, 'Vegetable Roll', 'Cucumber, avocado, carrot, and pickled radish', 9.00, ARRAY['cucumber', 'avocado', 'carrot', 'pickled radish'], ARRAY['vegetarian', 'vegan']::dietary_tag[], 8, 180, 0.72, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (sakura_sushi_uuid, 'Hot Dishes', 'Cooked Japanese specialties', 3) RETURNING id INTO category_uuid_3;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (sakura_sushi_uuid, category_uuid_3, 'Chicken Teriyaki', 'Grilled chicken with teriyaki glaze and rice', 18.00, ARRAY['chicken', 'teriyaki sauce', 'rice', 'vegetables'], ARRAY[]::dietary_tag[], 20, 480, 0.83, true),
  (sakura_sushi_uuid, category_uuid_3, 'Miso Soup', 'Traditional soybean paste soup with tofu and seaweed', 4.00, ARRAY['miso paste', 'tofu', 'seaweed', 'green onions'], ARRAY['vegetarian', 'vegan']::dietary_tag[], 5, 80, 0.75, true);

  -- === EL CORAZÓN (Mexican) ===
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (el_corazon_uuid, 'Antojitos', 'Mexican street food favorites', 1) RETURNING id INTO category_uuid;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (el_corazon_uuid, category_uuid, 'Guacamole & Chips', 'Fresh avocado dip with crispy tortilla chips', 9.00, ARRAY['avocados', 'lime', 'cilantro', 'onions', 'tortilla chips'], ARRAY['vegetarian', 'vegan', 'gluten-free']::dietary_tag[], 8, 320, 0.94, true),
  (el_corazon_uuid, category_uuid, 'Elote', 'Mexican street corn with mayo, cheese, and chili', 7.00, ARRAY['corn', 'mayonnaise', 'cotija cheese', 'chili powder', 'lime'], ARRAY['vegetarian', 'gluten-free']::dietary_tag[], 10, 180, 0.81, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (el_corazon_uuid, 'Tacos', 'Authentic street tacos', 2) RETURNING id INTO category_uuid_2;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (el_corazon_uuid, category_uuid_2, 'Carnitas Tacos', 'Slow-cooked pork with onions and cilantro, 3 tacos', 12.00, ARRAY['pork', 'corn tortillas', 'onions', 'cilantro', 'salsa verde'], ARRAY[]::dietary_tag[], 15, 420, 0.89, true),
  (el_corazon_uuid, category_uuid_2, 'Fish Tacos', 'Grilled mahi-mahi with cabbage slaw, 3 tacos', 14.00, ARRAY['mahi-mahi', 'cabbage', 'corn tortillas', 'chipotle mayo'], ARRAY[]::dietary_tag[], 18, 380, 0.86, true),
  (el_corazon_uuid, category_uuid_2, 'Vegetarian Tacos', 'Black beans, roasted vegetables, and avocado, 3 tacos', 10.00, ARRAY['black beans', 'bell peppers', 'onions', 'avocado', 'corn tortillas'], ARRAY['vegetarian', 'vegan']::dietary_tag[], 12, 320, 0.78, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (el_corazon_uuid, 'Mains', 'Hearty Mexican entrees', 3) RETURNING id INTO category_uuid_3;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (el_corazon_uuid, category_uuid_3, 'Carne Asada', 'Grilled steak with rice, beans, and tortillas', 22.00, ARRAY['beef', 'rice', 'black beans', 'flour tortillas', 'pico de gallo'], ARRAY[]::dietary_tag[], 25, 680, 0.85, true),
  (el_corazon_uuid, category_uuid_3, 'Enchiladas Verdes', 'Chicken enchiladas with green salsa and cheese', 16.00, ARRAY['chicken', 'corn tortillas', 'green salsa', 'cheese', 'crema'], ARRAY[]::dietary_tag[], 20, 520, 0.82, true);

  -- === THAI BASIL (Thai) ===
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (thai_basil_uuid, 'Appetizers', 'Thai starters and salads', 1) RETURNING id INTO category_uuid;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (thai_basil_uuid, category_uuid, 'Spring Rolls', 'Fresh vegetables wrapped in rice paper, 4 pieces', 8.00, ARRAY['rice paper', 'lettuce', 'carrots', 'cucumber', 'mint'], ARRAY['vegetarian', 'vegan', 'gluten-free']::dietary_tag[], 10, 120, 0.79, true),
  (thai_basil_uuid, category_uuid, 'Som Tam', 'Spicy green papaya salad with lime dressing', 10.00, ARRAY['green papaya', 'tomatoes', 'green beans', 'peanuts', 'lime'], ARRAY['vegetarian', 'vegan', 'spicy']::dietary_tag[], 8, 180, 0.84, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (thai_basil_uuid, 'Curries', 'Aromatic Thai curries', 2) RETURNING id INTO category_uuid_2;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (thai_basil_uuid, category_uuid_2, 'Green Curry', 'Spicy coconut curry with chicken and thai basil', 16.00, ARRAY['chicken', 'coconut milk', 'green curry paste', 'thai basil', 'eggplant'], ARRAY['spicy']::dietary_tag[], 20, 420, 0.88, true),
  (thai_basil_uuid, category_uuid_2, 'Massaman Curry', 'Rich and mild curry with beef and potatoes', 18.00, ARRAY['beef', 'coconut milk', 'massaman paste', 'potatoes', 'peanuts'], ARRAY['mild']::dietary_tag[], 25, 520, 0.85, true),
  (thai_basil_uuid, category_uuid_2, 'Red Curry Vegetables', 'Spicy red curry with mixed vegetables and tofu', 14.00, ARRAY['tofu', 'mixed vegetables', 'coconut milk', 'red curry paste'], ARRAY['vegetarian', 'vegan', 'spicy']::dietary_tag[], 18, 320, 0.76, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (thai_basil_uuid, 'Noodles & Rice', 'Thai noodle dishes and fried rice', 3) RETURNING id INTO category_uuid_3;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (thai_basil_uuid, category_uuid_3, 'Pad Thai', 'Classic stir-fried noodles with shrimp and peanuts', 15.00, ARRAY['rice noodles', 'shrimp', 'bean sprouts', 'peanuts', 'tamarind'], ARRAY[]::dietary_tag[], 15, 480, 0.91, true),
  (thai_basil_uuid, category_uuid_3, 'Thai Fried Rice', 'Jasmine rice stir-fried with vegetables and egg', 12.00, ARRAY['jasmine rice', 'mixed vegetables', 'egg', 'soy sauce'], ARRAY['vegetarian']::dietary_tag[], 12, 350, 0.82, true);

  -- === GOLDEN DRAGON (Chinese) ===
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (golden_dragon_uuid, 'Dim Sum', 'Traditional Cantonese small plates', 1) RETURNING id INTO category_uuid;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (golden_dragon_uuid, category_uuid, 'Har Gow', 'Steamed shrimp dumplings, 4 pieces', 8.00, ARRAY['shrimp', 'wheat starch', 'bamboo shoots'], ARRAY[]::dietary_tag[], 12, 160, 0.87, true),
  (golden_dragon_uuid, category_uuid, 'Siu Mai', 'Pork and shrimp dumplings, 4 pieces', 7.00, ARRAY['pork', 'shrimp', 'wonton wrapper', 'mushrooms'], ARRAY[]::dietary_tag[], 12, 180, 0.85, true),
  (golden_dragon_uuid, category_uuid, 'Vegetable Spring Rolls', 'Crispy rolls with mixed vegetables, 4 pieces', 6.00, ARRAY['cabbage', 'carrots', 'mushrooms', 'spring roll wrapper'], ARRAY['vegetarian', 'vegan']::dietary_tag[], 10, 220, 0.74, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (golden_dragon_uuid, 'Mains', 'Traditional Chinese entrees', 2) RETURNING id INTO category_uuid_2;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (golden_dragon_uuid, category_uuid_2, 'Peking Duck', 'Crispy duck with pancakes, scallions, and hoisin sauce', 32.00, ARRAY['duck', 'pancakes', 'scallions', 'hoisin sauce', 'cucumber'], ARRAY[]::dietary_tag[], 40, 720, 0.92, true),
  (golden_dragon_uuid, category_uuid_2, 'Sweet & Sour Pork', 'Battered pork with pineapple and bell peppers', 18.00, ARRAY['pork', 'pineapple', 'bell peppers', 'sweet and sour sauce'], ARRAY[]::dietary_tag[], 20, 520, 0.79, true),
  (golden_dragon_uuid, category_uuid_2, 'Mapo Tofu', 'Silky tofu in spicy Sichuan sauce', 14.00, ARRAY['tofu', 'sichuan peppercorns', 'chili oil', 'scallions'], ARRAY['vegetarian', 'spicy']::dietary_tag[], 15, 280, 0.81, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (golden_dragon_uuid, 'Noodles & Rice', 'Fried rice and noodle dishes', 3) RETURNING id INTO category_uuid_3;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (golden_dragon_uuid, category_uuid_3, 'Beef Chow Mein', 'Stir-fried noodles with beef and vegetables', 16.00, ARRAY['egg noodles', 'beef', 'bean sprouts', 'bok choy'], ARRAY[]::dietary_tag[], 18, 480, 0.84, true),
  (golden_dragon_uuid, category_uuid_3, 'Yang Chow Fried Rice', 'Fried rice with shrimp, char siu, and egg', 14.00, ARRAY['rice', 'shrimp', 'char siu pork', 'egg', 'peas'], ARRAY[]::dietary_tag[], 15, 420, 0.86, true);

  -- === MEDITERRANEAN MEZZE (Mediterranean/Greek) ===
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (med_mezze_uuid, 'Mezze', 'Small plates for sharing', 1) RETURNING id INTO category_uuid;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (med_mezze_uuid, category_uuid, 'Hummus Plate', 'Creamy chickpea dip with pita bread and olives', 10.00, ARRAY['chickpeas', 'tahini', 'olive oil', 'pita bread', 'olives'], ARRAY['vegetarian', 'vegan']::dietary_tag[], 5, 280, 0.88, true),
  (med_mezze_uuid, category_uuid, 'Dolmades', 'Grape leaves stuffed with rice and herbs, 6 pieces', 9.00, ARRAY['grape leaves', 'rice', 'pine nuts', 'herbs', 'lemon'], ARRAY['vegetarian', 'vegan', 'gluten-free']::dietary_tag[], 8, 220, 0.79, true),
  (med_mezze_uuid, category_uuid, 'Spanakopita', 'Spinach and feta wrapped in phyllo pastry', 8.00, ARRAY['spinach', 'feta cheese', 'phyllo pastry', 'onions', 'herbs'], ARRAY['vegetarian']::dietary_tag[], 12, 320, 0.82, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (med_mezze_uuid, 'Grilled Specialties', 'Fresh grilled meats and seafood', 2) RETURNING id INTO category_uuid_2;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (med_mezze_uuid, category_uuid_2, 'Grilled Branzino', 'Whole Mediterranean sea bass with lemon and herbs', 26.00, ARRAY['branzino', 'lemon', 'olive oil', 'oregano', 'garlic'], ARRAY['gluten-free']::dietary_tag[], 25, 380, 0.89, true),
  (med_mezze_uuid, category_uuid_2, 'Lamb Souvlaki', 'Grilled lamb skewers with tzatziki and pita', 22.00, ARRAY['lamb', 'tzatziki', 'pita bread', 'red onions', 'oregano'], ARRAY[]::dietary_tag[], 20, 520, 0.85, true),
  (med_mezze_uuid, category_uuid_2, 'Grilled Vegetable Platter', 'Seasonal vegetables with balsamic glaze', 16.00, ARRAY['zucchini', 'eggplant', 'bell peppers', 'balsamic vinegar'], ARRAY['vegetarian', 'vegan', 'gluten-free']::dietary_tag[], 18, 220, 0.76, true);
  
  INSERT INTO menu_categories (restaurant_id, name, description, display_order) VALUES 
  (med_mezze_uuid, 'Salads & Bowls', 'Fresh Mediterranean salads', 3) RETURNING id INTO category_uuid_3;
  
  INSERT INTO menu_items (restaurant_id, category_id, name, description, price, ingredients, dietary_tags, prep_time, calories, popularity_score, is_available) VALUES 
  (med_mezze_uuid, category_uuid_3, 'Greek Village Salad', 'Tomatoes, cucumbers, olives, feta with olive oil', 12.00, ARRAY['tomatoes', 'cucumbers', 'red onions', 'feta cheese', 'olives'], ARRAY['vegetarian', 'gluten-free']::dietary_tag[], 8, 280, 0.84, true),
  (med_mezze_uuid, category_uuid_3, 'Mediterranean Bowl', 'Quinoa bowl with grilled chicken and vegetables', 15.00, ARRAY['quinoa', 'grilled chicken', 'cucumbers', 'tomatoes', 'tzatziki'], ARRAY['gluten-free']::dietary_tag[], 15, 420, 0.81, true);
  
END $$; 