# MenuMate Database Setup

## 🗄️ Step 1: Supabase Setup

### 1.1 Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and create an account
2. Click "New Project"
3. Choose your organization and name your project (e.g., "menumate")
4. Set a strong database password
5. Choose a region close to you
6. Wait for the project to be created (~2 minutes)

### 1.2 Get API Keys
1. Go to Project Settings > API
2. Copy the following values:
   - `Project URL` (starts with https://...)
   - `anon public` key 
   - `service_role` key (keep this secret!)

### 1.3 Set Environment Variables
Create a `.env.local` file in the `menu-mate` directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# AI Services (Optional for now)
COHERE_API_KEY=
OPENAI_API_KEY=

# Caching (Optional for now)
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=
```

## 🗃️ Step 2: Create Database Schema

### 2.1 Enable Extensions
1. Go to your Supabase project
2. Click "SQL Editor" in the sidebar
3. Create a new query and paste this:

```sql
-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS vector;
```

4. Click "Run" to execute

### 2.2 Run Full Schema
1. In the SQL Editor, create another new query
2. Copy the entire contents of `scripts/schema.sql`
3. Paste and run it
4. This will create all tables and sample data

## ✅ Step 3: Test the Setup

### 3.1 Verify Database
1. Go to "Table Editor" in Supabase
2. You should see tables: `restaurants`, `menu_categories`, `menu_items`, etc.
3. Click on `restaurants` - you should see "Bella Vista Italian"
4. Click on `menu_items` - you should see sample menu items

### 3.2 Test the Application
1. Restart your development server: `npm run dev`
2. Go to `http://localhost:3000`
3. Click "Try Demo Restaurant"
4. You should see the Bella Vista Italian restaurant page with menu items

## 🔧 Troubleshooting

### Database Connection Issues
- Double-check your environment variables
- Make sure the Supabase project is active
- Check that the database URL and keys are correct

### No Menu Items Showing
- Verify the schema was created successfully
- Check if sample data was inserted
- Look at browser console for any errors

### TypeScript Errors
- Restart your development server
- Clear `.next` folder: `rm -rf .next`
- Run `npm run dev` again

## 🚀 Next Steps

Once this basic setup works:

1. **Add AI Integration**: Set up Cohere and OpenAI APIs
2. **Implement Search**: Add menu item filtering and search
3. **Chat Functionality**: Connect the chat interface to AI services
4. **Add More Restaurants**: Create additional restaurant profiles

## 📖 Sample Queries

You can test these in the Supabase SQL Editor:

```sql
-- View all restaurants
SELECT * FROM restaurants;

-- View menu items with categories
SELECT 
  mi.name,
  mi.price,
  mi.dietary_tags,
  mc.name as category_name
FROM menu_items mi
JOIN menu_categories mc ON mi.category_id = mc.id
ORDER BY mc.display_order, mi.popularity_score DESC;

-- Search for vegetarian items
SELECT * FROM menu_items 
WHERE 'vegetarian' = ANY(dietary_tags);
``` 