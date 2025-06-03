export type DietaryTag = 
  | 'vegan' 
  | 'vegetarian' 
  | 'gluten-free' 
  | 'dairy-free' 
  | 'nut-free' 
  | 'halal' 
  | 'kosher' 
  | 'keto' 
  | 'paleo' 
  | 'low-carb'
  | 'high-protein'
  | 'spicy'
  | 'mild';

export const dietaryTagColors: Record<DietaryTag, { bg: string; text: string; border: string }> = {
  'vegan': {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-200'
  },
  'vegetarian': {
    bg: 'bg-lime-100',
    text: 'text-lime-800',
    border: 'border-lime-200'
  },
  'gluten-free': {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
    border: 'border-yellow-200'
  },
  'dairy-free': {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-200'
  },
  'nut-free': {
    bg: 'bg-orange-100',
    text: 'text-orange-800',
    border: 'border-orange-200'
  },
  'halal': {
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    border: 'border-purple-200'
  },
  'kosher': {
    bg: 'bg-indigo-100',
    text: 'text-indigo-800',
    border: 'border-indigo-200'
  },
  'keto': {
    bg: 'bg-pink-100',
    text: 'text-pink-800',
    border: 'border-pink-200'
  },
  'paleo': {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    border: 'border-amber-200'
  },
  'low-carb': {
    bg: 'bg-cyan-100',
    text: 'text-cyan-800',
    border: 'border-cyan-200'
  },
  'high-protein': {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-200'
  },
  'spicy': {
    bg: 'bg-red-100',
    text: 'text-red-800',
    border: 'border-red-200'
  },
  'mild': {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    border: 'border-gray-200'
  }
};

export const dietaryTagLabels: Record<DietaryTag, string> = {
  'vegan': '🌱 Vegan',
  'vegetarian': '🥬 Vegetarian',
  'gluten-free': '🌾 Gluten-Free',
  'dairy-free': '🥛 Dairy-Free',
  'nut-free': '🥜 Nut-Free',
  'halal': '☪️ Halal',
  'kosher': '✡️ Kosher',
  'keto': '🥑 Keto',
  'paleo': '🦴 Paleo',
  'low-carb': '⬇️ Low-Carb',
  'high-protein': '💪 High-Protein',
  'spicy': '🌶️ Spicy',
  'mild': '😌 Mild'
}; 