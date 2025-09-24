import { Question } from '../types';

export const questions: Question[] = [
  {
    id: "meal",
    text: "What meal are you looking for?",
    options: [
      { label: "Breakfast", value: "breakfast" },
      { label: "Brunch", value: "brunch" },
      { label: "Lunch", value: "lunch" },
      { label: "Dinner", value: "dinner" },
      { label: "Dessert", value: "dessert" },
    ],
  },
  {
    id: "taste",
    text: "Do you prefer something sweet, savory, spicy, sour, bitter, or umami?",
    options: [
      { label: "Sweet", value: "sweet" },
      { label: "Savory", value: "savory" },
      { label: "Spicy", value: "spicy" },
      { label: "Sour", value: "sour" },
      { label: "Bitter", value: "bitter" },
      { label: "Umami", value: "umami" },
    ],
  },
  {
    id: "cuisine",
    text: "Which cuisine are you in the mood for?",
    options: [
      { label: "American", value: "american" },
      { label: "Italian", value: "italian" },
      { label: "Mexican", value: "mexican" },
      { label: "Chinese", value: "chinese" },
      { label: "Japanese", value: "japanese" },
      { label: "Indian", value: "indian" },
      { label: "Thai", value: "thai" },
      { label: "French", value: "french" },
      { label: "Mediterranean", value: "mediterranean" },
      { label: "Korean", value: "korean" },
      { label: "Vietnamese", value: "vietnamese" },
      { label: "Middle Eastern", value: "middle-eastern" },
    ],
  },
  {
    id: "dietary",
    text: "Do you have any dietary restrictions or preferences?",
    options: [
      { label: "No restriction", value: "none" },
      { label: "Vegetarian", value: "vegetarian" },
      { label: "Vegan", value: "vegan" },
      { label: "Gluten-free / Celiac", value: "gluten-free" },
      { label: "Lactose intolerant / Dairy-free", value: "lactose-intolerant" },
    ],
  },
];
