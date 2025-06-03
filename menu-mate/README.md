# 🍽️ MenuMate - AI Restaurant Menu Recommendation System

An intelligent restaurant menu recommendation system powered by **hybrid AI architecture** using Cohere and OpenAI APIs. MenuMate provides personalized dining suggestions through natural conversation and smart menu analysis.

## 🏪 **Featured Restaurants**

Our demo includes **7 diverse restaurants** with complete menu data:

| Restaurant | Cuisine | Specialties | Location |
|------------|---------|-------------|----------|
| **🍝 Bella Vista Italian** | Italian | Handmade pasta, wood-fired pizza | 123 Main St |
| **🍛 Spice Garden** | Indian | Tandoor specialties, traditional curries | 456 Mission St |
| **🍣 Sakura Sushi** | Japanese | Fresh sashimi, creative rolls | 789 Geary Blvd |
| **🌮 El Corazón** | Mexican | Street tacos, craft margaritas | 321 Valencia St |
| **🍜 Thai Basil** | Thai | Fresh herbs, bold spices | 567 Irving St |
| **🥟 Golden Dragon** | Chinese | Cantonese dim sum, Peking duck | 888 Grant Ave |
| **🫒 Mediterranean Mezze** | Mediterranean | Mezze platters, grilled seafood | 234 Fillmore St |

Each restaurant features:
- **Complete menu categories** (appetizers, mains, desserts)
- **Detailed dish descriptions** with ingredients
- **Dietary tag system** (vegetarian, vegan, gluten-free, etc.)
- **Nutritional information** (calories, prep time)
- **Popularity scoring** for recommendations

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+
- Supabase account
- Cohere API key (optional for full AI features)
- OpenAI API key (optional for full AI features)

### Installation

1. **Clone and setup:**
   ```bash
   git clone <repository-url>
   cd menu-mate
   npm install
   ```

2. **Database setup:**
   - Follow the detailed instructions in `SETUP.md`
   - Run `scripts/schema.sql` for the base restaurant (Bella Vista Italian)
   - Run `scripts/additional-restaurants.sql` for all 6 additional restaurants

3. **Environment configuration:**
   ```bash
   # Create .env.local file
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_key
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to explore all restaurants!

## 🏗️ **Architecture Overview**

### **Hybrid AI System**
- **Cohere**: Embeddings, reranking, intent parsing (cost-optimized)
- **OpenAI**: Conversational responses, complex reasoning
- **Cost target**: ~$150/month for 1K daily active users

### **Tech Stack**
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Database**: Supabase (PostgreSQL + pgvector)
- **AI Services**: Cohere API, OpenAI API
- **Caching**: Upstash Redis (optional)

### **Key Features**
- **Vector search** for menu item similarity
- **Multi-turn conversations** with context
- **Dietary preference filtering**
- **Real-time recommendations**
- **Multi-restaurant support**

## 🎯 **Demo Features**

### **Restaurant Pages**
- Browse complete menus organized by category
- View detailed item information and dietary tags
- Interactive AI chat interface
- Responsive design for all devices

### **AI Chat Interface** *(In Development)*
- Natural language menu queries
- Personalized recommendations
- Dietary restriction awareness
- Multi-turn conversation support

### **Search & Filtering** *(Planned)*
- Semantic menu search
- Filter by dietary preferences
- Price range filtering
- Cuisine type selection

## 📁 **Project Structure**

```
menu-mate/
├── app/                    # Next.js app directory
│   ├── restaurant/[slug]/  # Dynamic restaurant pages
│   └── page.tsx           # Homepage with restaurant grid
├── components/            # React components
│   ├── restaurant/        # Restaurant-specific components
│   ├── chat/             # Chat interface components
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
│   ├── supabase/         # Database client and queries
│   └── types/            # TypeScript definitions
├── scripts/              # Database setup scripts
│   ├── schema.sql        # Main schema + Bella Vista Italian
│   └── additional-restaurants.sql  # 6 additional restaurants
└── SETUP.md             # Detailed setup instructions
```

## 🔧 **Development**

### **Adding New Restaurants**
1. Insert restaurant data in database
2. Add slug to `generateStaticParams()` in `app/restaurant/[slug]/page.tsx`
3. Update homepage restaurant grid in `app/page.tsx`

### **Database Schema**
- **restaurants**: Basic restaurant information
- **menu_categories**: Menu organization (appetizers, mains, etc.)
- **menu_items**: Individual dishes with full metadata
- **user_preferences**: User dietary preferences *(future)*
- **chat_sessions**: Conversation history *(future)*

### **Available Scripts**
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint checking
```

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. Connect GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main

### **Other Platforms**
- **Netlify**: Full Next.js support
- **Railway**: Easy PostgreSQL + app deployment
- **DigitalOcean**: App Platform deployment

## 📚 **Documentation**

- **`SETUP.md`**: Complete database setup guide
- **API Documentation**: *(Coming soon)*
- **Component Documentation**: *(Coming soon)*

## 🤝 **Future Enhancements**

### **Phase 1** *(Current)*
- ✅ Multi-restaurant support (7 restaurants)
- ✅ Complete menu data structure
- ✅ Responsive UI design
- 🚧 AI chat integration

### **Phase 2** *(Planned)*
- 🔲 User authentication & preferences
- 🔲 Advanced search & filtering
- 🔲 Restaurant management dashboard
- 🔲 Mobile app version

### **Phase 3** *(Future)*
- 🔲 Multi-location restaurant chains
- 🔲 Online ordering integration
- 🔲 Real-time inventory updates
- 🔲 Restaurant analytics dashboard

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**MenuMate** - *Discover your perfect meal through AI-powered recommendations* 🤖🍽️ 