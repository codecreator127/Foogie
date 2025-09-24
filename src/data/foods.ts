import { Food } from '../types';

export const foods: Food[] = [
  // BREAKFAST
  // AMERICAN
  // Sweet
  { name: "Pancakes 🥞", attributes: ["breakfast", "sweet", "american"], dietary: ["vegetarian"] },
  { name: "Waffles 🧇", attributes: ["breakfast", "sweet", "american"], dietary: ["vegetarian"] },
  { name: "Maple Oatmeal 🍯", attributes: ["breakfast", "sweet", "american"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Eggs Benedict 🥚", attributes: ["breakfast", "savory", "american"], dietary: ["vegetarian"] },
  { name: "Avocado Toast 🥑", attributes: ["breakfast", "savory", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Breakfast Sandwich 🥪", attributes: ["breakfast", "savory", "american"], dietary: [] },

  // Spicy
  { name: "Breakfast Burrito 🌯", attributes: ["breakfast", "spicy", "american"], dietary: [] },
  { name: "Spicy Tofu Scramble 🌱", attributes: ["breakfast", "spicy", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Huevos Rancheros 🥚", attributes: ["breakfast", "spicy", "american"], dietary: ["vegetarian"] },

  // Umami
  { name: "Bagel with Lox 🥯", attributes: ["breakfast", "umami", "american"], dietary: [] },
  { name: "Cream Cheese Bagel 🥯", attributes: ["breakfast", "umami", "american"], dietary: ["vegetarian"] },
  { name: "Savory Oatmeal Bowl 🥣", attributes: ["breakfast", "umami", "american"], dietary: ["vegan", "gluten-free"] },

  // Sour
  { name: "Grapefruit 🥭", attributes: ["breakfast", "sour", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Yogurt with Berries 🥛", attributes: ["breakfast", "sour", "american"], dietary: ["vegetarian"] },
  { name: "Lemon Pancakes 🍋", attributes: ["breakfast", "sour", "american"], dietary: [] },

  // Bitter
  { name: "Black Coffee ☕", attributes: ["breakfast", "bitter", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Chicory Latte 🥛", attributes: ["breakfast", "bitter", "american"], dietary: ["vegetarian"] },
  { name: "Matcha Latte 🍵", attributes: ["breakfast", "bitter", "american"], dietary: [] },

  // FRENCH
  // Sweet
  { name: "French Toast 🍞", attributes: ["breakfast", "sweet", "french"], dietary: ["vegetarian"] },
  { name: "Croissant 🥐", attributes: ["breakfast", "sweet", "french"], dietary: ["vegetarian"] },
  { name: "Fruit Tart 🍓", attributes: ["breakfast", "sweet", "french"], dietary: ["vegan"] },

  // Savory
  { name: "Quiche Lorraine 🥧", attributes: ["breakfast", "savory", "french"], dietary: ["vegetarian"] },
  { name: "Cheese Croissant 🥐", attributes: ["breakfast", "savory", "french"], dietary: ["vegetarian"] },
  { name: "Mushroom Tart 🍄", attributes: ["breakfast", "savory", "french"], dietary: ["vegan"] },

  // Spicy
  { name: "Spicy Ratatouille 🍆", attributes: ["breakfast", "spicy", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Chili Omelette 🍳", attributes: ["breakfast", "spicy", "french"], dietary: ["vegetarian"] },
  { name: "Spicy Lentil Stew 🥣", attributes: ["breakfast", "spicy", "french"], dietary: ["vegan"] },

  // Umami
  { name: "Mushroom Quiche 🍄", attributes: ["breakfast", "umami", "french"], dietary: ["vegetarian"] },
  { name: "Savory Crepe 🥞", attributes: ["breakfast", "umami", "french"], dietary: ["vegetarian"] },
  { name: "Soy Glazed Tofu Tart 🥟", attributes: ["breakfast", "umami", "french"], dietary: ["vegan"] },

  // Sour
  { name: "Lemon Madeleines 🍋", attributes: ["breakfast", "sour", "french"], dietary: ["vegetarian"] },
  { name: "Yogurt Parfait 🥛", attributes: ["breakfast", "sour", "french"], dietary: ["vegetarian"] },
  { name: "Lemon Sorbet 🍧", attributes: ["breakfast", "sour", "french"], dietary: ["vegan"] },

  // Bitter
  { name: "Espresso ☕", attributes: ["breakfast", "bitter", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Café au Lait 🥛", attributes: ["breakfast", "bitter", "french"], dietary: ["vegetarian"] },
  { name: "Dark Chocolate Croissant 🍫", attributes: ["breakfast", "bitter", "french"], dietary: ["vegetarian"] },

  // MEXICAN
  // Sweet
  { name: "Churros 🥨", attributes: ["breakfast", "sweet", "mexican"], dietary: ["vegetarian"] },
  { name: "Pan Dulce 🍩", attributes: ["breakfast", "sweet", "mexican"], dietary: ["vegetarian"] },
  { name: "Fruit Agua Fresca 🍹", attributes: ["breakfast", "sweet", "mexican"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Chilaquiles 🍳", attributes: ["breakfast", "savory", "mexican"], dietary: ["vegetarian"] },
  { name: "Huevos a la Mexicana 🥚", attributes: ["breakfast", "savory", "mexican"], dietary: ["vegetarian"] },
  { name: "Avocado Tacos 🥑", attributes: ["breakfast", "savory", "mexican"], dietary: ["vegan", "gluten-free"] },

  // Spicy
  { name: "Breakfast Burrito 🌯", attributes: ["breakfast", "spicy", "mexican"], dietary: [] },
  { name: "Spicy Tofu Huevos 🌱", attributes: ["breakfast", "spicy", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Chili Eggs 🥚", attributes: ["breakfast", "spicy", "mexican"], dietary: ["vegetarian"] },

  // Umami
  { name: "Savory Tamales 🌽", attributes: ["breakfast", "umami", "mexican"], dietary: [] },
  { name: "Refried Bean Tacos 🫘", attributes: ["breakfast", "umami", "mexican"], dietary: ["vegetarian"] },
  { name: "Mushroom Quesadilla 🍄", attributes: ["breakfast", "umami", "mexican"], dietary: ["vegetarian"] },

  // Sour
  { name: "Lime Agua Fresca 🍹", attributes: ["breakfast", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Citrus Yogurt 🥛", attributes: ["breakfast", "sour", "mexican"], dietary: ["vegetarian"] },
  { name: "Pickled Fruit 🌶️", attributes: ["breakfast", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },

  // Bitter
  { name: "Black Coffee ☕", attributes: ["breakfast", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Cacao Drink 🍫", attributes: ["breakfast", "bitter", "mexican"], dietary: ["vegetarian"] },
  { name: "Espresso con Leche 🥛", attributes: ["breakfast", "bitter", "mexican"], dietary: [] },

  // CHINESE
  // Sweet
  { name: "Sweet Red Bean Bun 🥮", attributes: ["breakfast", "sweet", "chinese"], dietary: ["vegetarian"] },
  { name: "Lotus Seed Pastry 🥮", attributes: ["breakfast", "sweet", "chinese"], dietary: ["vegetarian"] },
  { name: "Fruit Congee 🍓", attributes: ["breakfast", "sweet", "chinese"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Dim Sum 🥟", attributes: ["breakfast", "savory", "chinese"], dietary: [] },
  { name: "Vegetable Bun 🥟", attributes: ["breakfast", "savory", "chinese"], dietary: ["vegan"] },
  { name: "Scallion Pancake 🥞", attributes: ["breakfast", "savory", "chinese"], dietary: ["vegetarian"] },

  // Spicy
  { name: "Spicy Tofu Congee 🌶️", attributes: ["breakfast", "spicy", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Chili Pork Bun 🥟", attributes: ["breakfast", "spicy", "chinese"], dietary: [] },
  { name: "Szechuan Eggplant 🍆", attributes: ["breakfast", "spicy", "chinese"], dietary: ["vegan", "gluten-free"] },

  // Umami
  { name: "Congee 🍚", attributes: ["breakfast", "umami", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Soy Sauce Eggs 🥚", attributes: ["breakfast", "umami", "chinese"], dietary: ["vegetarian"] },
  { name: "Mushroom Dumplings 🍄", attributes: ["breakfast", "umami", "chinese"], dietary: ["vegetarian"] },

  // Sour
  { name: "Pickled Vegetables 🥒", attributes: ["breakfast", "sour", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Plum Congee 🍑", attributes: ["breakfast", "sour", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Sour Soy Milk 🥛", attributes: ["breakfast", "sour", "chinese"], dietary: ["vegetarian"] },

  // Bitter
  { name: "Green Tea 🍵", attributes: ["breakfast", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Chrysanthemum Tea 🌼", attributes: ["breakfast", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Bitter Melon Congee 🍈", attributes: ["breakfast", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },

  // JAPANESE
  // Sweet
  { name: "Anko Pancake 🥞", attributes: ["breakfast", "sweet", "japanese"], dietary: ["vegetarian"] },
  { name: "Mochi 🍡", attributes: ["breakfast", "sweet", "japanese"], dietary: ["vegetarian"] },
  { name: "Fruit Daifuku 🍓", attributes: ["breakfast", "sweet", "japanese"], dietary: ["vegan"] },

  // Savory
  { name: "Onigiri 🍙", attributes: ["breakfast", "savory", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Tamago Sando 🥪", attributes: ["breakfast", "savory", "japanese"], dietary: ["vegetarian"] },
  { name: "Savory Miso Pancake 🥞", attributes: ["breakfast", "savory", "japanese"], dietary: ["vegetarian"] },

  // Spicy
  { name: "Spicy Tofu Onigiri 🌶️", attributes: ["breakfast", "spicy", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Wasabi Tamago 🥚", attributes: ["breakfast", "spicy", "japanese"], dietary: ["vegetarian"] },
  { name: "Chili Miso Soup 🍲", attributes: ["breakfast", "spicy", "japanese"], dietary: ["vegan", "gluten-free"] },

  // Umami
  { name: "Miso Soup 🍲", attributes: ["breakfast", "umami", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Tamagoyaki 🍳", attributes: ["breakfast", "umami", "japanese"], dietary: ["vegetarian"] },
  { name: "Nori Wraps 🍙", attributes: ["breakfast", "umami", "japanese"], dietary: ["vegan", "gluten-free"] },

  // Sour
  { name: "Pickled Plum Onigiri 🍙", attributes: ["breakfast", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Yogurt with Yuzu 🥛", attributes: ["breakfast", "sour", "japanese"], dietary: ["vegetarian"] },
  { name: "Umeboshi Paste Toast 🥪", attributes: ["breakfast", "sour", "japanese"], dietary: ["vegan"] },

  // Bitter
  { name: "Matcha Latte 🍵", attributes: ["breakfast", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Sencha Tea 🍵", attributes: ["breakfast", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Black Sesame Pudding 🍮", attributes: ["breakfast", "bitter", "japanese"], dietary: ["vegetarian"] },

  // INDIAN
  // Sweet
  { name: "Sweet Lassi 🥛", attributes: ["breakfast", "sweet", "indian"], dietary: ["vegetarian"] },
  { name: "Kesari Bath 🍚", attributes: ["breakfast", "sweet", "indian"], dietary: ["vegetarian"] },
  { name: "Fruit Chaat 🍎", attributes: ["breakfast", "sweet", "indian"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Paratha 🫓", attributes: ["breakfast", "savory", "indian"], dietary: ["vegetarian"] },
  { name: "Idli with Chutney 🫓", attributes: ["breakfast", "savory", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Vegetable Upma 🥣", attributes: ["breakfast", "savory", "indian"], dietary: ["vegan"] },

  // Spicy
  { name: "Masala Chai ☕", attributes: ["breakfast", "spicy", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Spicy Poha 🌶️", attributes: ["breakfast", "spicy", "indian"], dietary: ["vegan"] },
  { name: "Paneer Bhurji 🥚", attributes: ["breakfast", "spicy", "indian"], dietary: ["vegetarian"] },

  // Umami
  { name: "Sambar with Rice 🍚", attributes: ["breakfast", "umami", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Mushroom Masala 🍄", attributes: ["breakfast", "umami", "indian"], dietary: ["vegan"] },
  { name: "Paneer Bhurji 🥚", attributes: ["breakfast", "umami", "indian"], dietary: ["vegetarian"] },

  // Sour
  { name: "Tamarind Chutney 🍯", attributes: ["breakfast", "sour", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Pickled Mango 🌶️", attributes: ["breakfast", "sour", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Curd with Lemon 🍋", attributes: ["breakfast", "sour", "indian"], dietary: ["vegetarian"] },

  // Bitter
  { name: "Black Coffee ☕", attributes: ["breakfast", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Kahwa Tea 🍵", attributes: ["breakfast", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Cardamom Tea ☕", attributes: ["breakfast", "bitter", "indian"], dietary: ["vegetarian"] },

  // MIDDLE-EASTERN
  // Sweet
  { name: "Baklava 🥮", attributes: ["breakfast", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Date Cake 🍰", attributes: ["breakfast", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Fruit Salad 🥗", attributes: ["breakfast", "sweet", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Labneh 🧀", attributes: ["breakfast", "sour", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Hummus & Pita 🥙", attributes: ["breakfast", "savory", "middle-eastern"], dietary: ["vegan"] },
  { name: "Falafel Wrap 🌯", attributes: ["breakfast", "savory", "middle-eastern"], dietary: ["vegan"] },

  // Spicy
  { name: "Shakshuka 🍳", attributes: ["breakfast", "spicy", "middle-eastern"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Spicy Lentil Stew 🥣", attributes: ["breakfast", "spicy", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
  { name: "Harissa Eggs 🥚", attributes: ["breakfast", "spicy", "middle-eastern"], dietary: ["vegetarian"] },

  // Umami
  { name: "Mushroom Pide 🍄", attributes: ["breakfast", "umami", "middle-eastern"], dietary: ["vegan"] },
  { name: "Cheese Pita 🧀", attributes: ["breakfast", "umami", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Olive & Tomato Flatbread 🫒", attributes: ["breakfast", "umami", "middle-eastern"], dietary: ["vegan"] },

  // Sour
  { name: "Labneh with Lemon 🥛", attributes: ["breakfast", "sour", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Pickled Vegetables 🥒", attributes: ["breakfast", "sour", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
  { name: "Citrus Salad 🍊", attributes: ["breakfast", "sour", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

  // Bitter
  { name: "Turkish Coffee ☕", attributes: ["breakfast", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
  { name: "Mint Tea 🍵", attributes: ["breakfast", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
  { name: "Cardamom Coffee ☕", attributes: ["breakfast", "bitter", "middle-eastern"], dietary: ["vegetarian"] },

  // ITALIAN
  // Sweet
  { name: "Cornetto 🥐", attributes: ["breakfast", "sweet", "italian"], dietary: ["vegetarian"] },
  { name: "Tiramisu 🥮", attributes: ["breakfast", "sweet", "italian"], dietary: ["vegetarian"] },
  { name: "Fruit Granola 🍓", attributes: ["breakfast", "sweet", "italian"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Frittata 🍳", attributes: ["breakfast", "savory", "italian"], dietary: ["vegetarian"] },
  { name: "Caprese Toast 🥪", attributes: ["breakfast", "savory", "italian"], dietary: ["vegetarian"] },
  { name: "Polenta Bowl 🌽", attributes: ["breakfast", "savory", "italian"], dietary: ["vegan", "gluten-free"] },

  // Spicy
  { name: "Spicy Arrabbiata Eggs 🍳", attributes: ["breakfast", "spicy", "italian"], dietary: ["vegetarian"] },
  { name: "Chili Frittata 🌶️", attributes: ["breakfast", "spicy", "italian"], dietary: ["vegetarian"] },
  { name: "Spicy Polenta 🌽", attributes: ["breakfast", "spicy", "italian"], dietary: ["vegan", "gluten-free"] },

  // Umami
  { name: "Mushroom Risotto 🍄", attributes: ["breakfast", "umami", "italian"], dietary: ["vegetarian"] },
  { name: "Parmesan Toast 🥪", attributes: ["breakfast", "umami", "italian"], dietary: ["vegetarian"] },
  { name: "Tomato & Olive Bruschetta 🍅", attributes: ["breakfast", "umami", "italian"], dietary: ["vegan"] },

  // Sour
  { name: "Lemon Ricotta Pancakes 🍋", attributes: ["breakfast", "sour", "italian"], dietary: ["vegetarian"] },
  { name: "Yogurt with Citrus 🥛", attributes: ["breakfast", "sour", "italian"], dietary: ["vegetarian"] },
  { name: "Citrus Granita 🍧", attributes: ["breakfast", "sour", "italian"], dietary: ["vegan", "gluten-free"] },

  // Bitter
  { name: "Espresso ☕", attributes: ["breakfast", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },
  { name: "Cappuccino ☕", attributes: ["breakfast", "bitter", "italian"], dietary: ["vegetarian"] },
  { name: "Caffè Americano ☕", attributes: ["breakfast", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },

  // BRUNCH
  // AMERICAN
  // Sweet
  { name: "Belgian Waffles 🧇", attributes: ["brunch", "sweet", "american"], dietary: ["vegetarian"] },
  { name: "Pancakes with Maple Syrup 🥞", attributes: ["brunch", "sweet", "american"], dietary: ["vegetarian"] },
  { name: "Fruit Parfait 🍓", attributes: ["brunch", "sweet", "american"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Avocado Toast 🥑", attributes: ["brunch", "savory", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Eggs Benedict 🥚", attributes: ["brunch", "savory", "american"], dietary: ["vegetarian"] },
  { name: "Breakfast Sandwich 🥪", attributes: ["brunch", "savory", "american"], dietary: [] },

  // Spicy
  { name: "Breakfast Burrito 🌯", attributes: ["brunch", "spicy", "american"], dietary: [] },
  { name: "Spicy Shakshuka 🍳", attributes: ["brunch", "spicy", "american"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Spicy Tofu Scramble 🌶️", attributes: ["brunch", "spicy", "american"], dietary: ["vegan", "gluten-free"] },

  // Umami
  { name: "Savory Oatmeal 🍲", attributes: ["brunch", "umami", "american"], dietary: ["vegan"] },
  { name: "Mushroom Toast 🍄", attributes: ["brunch", "umami", "american"], dietary: ["vegetarian"] },
  { name: "Cheese Quiche 🧀", attributes: ["brunch", "umami", "american"], dietary: ["vegetarian"] },

  // Sour
  { name: "Greek Yogurt Parfait 🥛", attributes: ["brunch", "sour", "american"], dietary: ["vegetarian"] },
  { name: "Avocado Lime Toast 🥑", attributes: ["brunch", "sour", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Citrus Salad 🍊", attributes: ["brunch", "sour", "american"], dietary: ["vegan", "gluten-free"] },

  // Bitter
  { name: "Black Coffee ☕", attributes: ["brunch", "bitter", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Cold Brew Coffee 🧊", attributes: ["brunch", "bitter", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Green Tea 🍵", attributes: ["brunch", "bitter", "american"], dietary: ["vegan", "gluten-free"] },

  // FRENCH
  // Sweet
  { name: "Croissant 🥐", attributes: ["brunch", "sweet", "french"], dietary: ["vegetarian"] },
  { name: "Pain au Chocolat 🍫", attributes: ["brunch", "sweet", "french"], dietary: ["vegetarian"] },
  { name: "Crepes Suzette 🍊", attributes: ["brunch", "sweet", "french"], dietary: ["vegetarian"] },

  // Savory
  { name: "Quiche Lorraine 🥧", attributes: ["brunch", "savory", "french"], dietary: ["vegetarian"] },
  { name: "Ratatouille Tart 🍆", attributes: ["brunch", "savory", "french"], dietary: ["vegan"] },
  { name: "Croque Monsieur 🥪", attributes: ["brunch", "savory", "french"], dietary: [] },

  // Spicy
  { name: "Spicy Ratatouille Tart 🌶️", attributes: ["brunch", "spicy", "french"], dietary: ["vegan"] },
  { name: "Chili Omelette 🍳", attributes: ["brunch", "spicy", "french"], dietary: ["vegetarian"] },
  { name: "Spicy Vegetable Crepe 🌶️", attributes: ["brunch", "spicy", "french"], dietary: ["vegan"] },

  // Umami
  { name: "Mushroom Quiche 🍄", attributes: ["brunch", "umami", "french"], dietary: ["vegetarian"] },
  { name: "Cheese Tart 🧀", attributes: ["brunch", "umami", "french"], dietary: ["vegetarian"] },
  { name: "Savory Crepe 🍳", attributes: ["brunch", "umami", "french"], dietary: ["vegetarian"] },

  // Sour
  { name: "Lemon Tart 🍋", attributes: ["brunch", "sour", "french"], dietary: ["vegetarian"] },
  { name: "Yogurt with Berries 🥛", attributes: ["brunch", "sour", "french"], dietary: ["vegetarian"] },
  { name: "Citrus Crepe 🍊", attributes: ["brunch", "sour", "french"], dietary: ["vegetarian"] },

  // Bitter
  { name: "Espresso ☕", attributes: ["brunch", "bitter", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Black Coffee ☕", attributes: ["brunch", "bitter", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Herbal Tea 🍵", attributes: ["brunch", "bitter", "french"], dietary: ["vegan", "gluten-free"] },

  // MEXICAN
  // Sweet
  { name: "Churros 🍩", attributes: ["brunch", "sweet", "mexican"], dietary: ["vegetarian"] },
  { name: "Sweet Tamales 🌽", attributes: ["brunch", "sweet", "mexican"], dietary: ["vegetarian"] },
  { name: "Fruit Agua Fresca 🍓", attributes: ["brunch", "sweet", "mexican"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Breakfast Tacos 🌮", attributes: ["brunch", "savory", "mexican"], dietary: [] },
  { name: "Chilaquiles 🍳", attributes: ["brunch", "savory", "mexican"], dietary: ["vegetarian"] },
  { name: "Huevos Rancheros 🍳", attributes: ["brunch", "savory", "mexican"], dietary: ["vegetarian"] },

  // Spicy
  { name: "Spicy Breakfast Burrito 🌯", attributes: ["brunch", "spicy", "mexican"], dietary: [] },
  { name: "Spicy Chilaquiles 🌶️", attributes: ["brunch", "spicy", "mexican"], dietary: ["vegetarian"] },
  { name: "Hot Salsa Eggs 🌶️", attributes: ["brunch", "spicy", "mexican"], dietary: ["vegetarian"] },

  // Umami
  { name: "Mushroom Quesadilla 🍄", attributes: ["brunch", "umami", "mexican"], dietary: ["vegetarian"] },
  { name: "Cheese Enchiladas 🧀", attributes: ["brunch", "umami", "mexican"], dietary: ["vegetarian"] },
  { name: "Savory Tamales 🌽", attributes: ["brunch", "umami", "mexican"], dietary: ["vegetarian"] },

  // Sour
  { name: "Citrus Agua Fresca 🍊", attributes: ["brunch", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Pickled Jalapeños 🌶️", attributes: ["brunch", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Lime Crema 🌿", attributes: ["brunch", "sour", "mexican"], dietary: ["vegetarian"] },

  // Bitter
  { name: "Café de Olla ☕", attributes: ["brunch", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Espresso ☕", attributes: ["brunch", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Hibiscus Tea 🌺", attributes: ["brunch", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },

  // CHINESE
  // Sweet
  { name: "Sweet Red Bean Buns 🫘", attributes: ["brunch", "sweet", "chinese"], dietary: ["vegetarian"] },
  { name: "Lotus Seed Pastry 🥮", attributes: ["brunch", "sweet", "chinese"], dietary: ["vegetarian"] },
  { name: "Mango Pudding 🥭", attributes: ["brunch", "sweet", "chinese"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Dim Sum Selection 🥟", attributes: ["brunch", "savory", "chinese"], dietary: [] },
  { name: "Scallion Pancakes 🥞", attributes: ["brunch", "savory", "chinese"], dietary: ["vegetarian"] },
  { name: "Steamed Bun with Veggies 🥯", attributes: ["brunch", "savory", "chinese"], dietary: ["vegan"] },

  // Spicy
  { name: "Sichuan Spicy Tofu 🌶️", attributes: ["brunch", "spicy", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Spicy Noodle Bowl 🍜", attributes: ["brunch", "spicy", "chinese"], dietary: ["vegetarian"] },
  { name: "Chili Crab 🦀", attributes: ["brunch", "spicy", "chinese"], dietary: [] },

  // Umami
  { name: "Miso Soup 🍲", attributes: ["brunch", "umami", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Braised Mushrooms 🍄", attributes: ["brunch", "umami", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Soy Egg 🥚", attributes: ["brunch", "umami", "chinese"], dietary: ["vegetarian"] },

  // Sour
  { name: "Pickled Vegetables 🥒", attributes: ["brunch", "sour", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Lemon Tea 🍋", attributes: ["brunch", "sour", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Vinegar Dumplings 🥟", attributes: ["brunch", "sour", "chinese"], dietary: ["vegetarian"] },

  // Bitter
  { name: "Pu-erh Tea 🍵", attributes: ["brunch", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Green Tea 🍵", attributes: ["brunch", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },
  { name: "Bitter Melon Stir Fry 🍈", attributes: ["brunch", "bitter", "chinese"], dietary: ["vegan"] },

  // JAPANESE
  // Sweet
  { name: "Mochi 🍡", attributes: ["brunch", "sweet", "japanese"], dietary: ["vegan"] },
  { name: "Dorayaki 🥞", attributes: ["brunch", "sweet", "japanese"], dietary: ["vegetarian"] },
  { name: "Anmitsu 🍧", attributes: ["brunch", "sweet", "japanese"], dietary: ["vegetarian"] },

  // Savory
  { name: "Tamago Sushi 🍣", attributes: ["brunch", "savory", "japanese"], dietary: ["vegetarian"] },
  { name: "Onigiri 🍙", attributes: ["brunch", "savory", "japanese"], dietary: ["vegan"] },
  { name: "Okonomiyaki 🥞", attributes: ["brunch", "savory", "japanese"], dietary: ["vegetarian"] },

  // Spicy
  { name: "Spicy Ramen 🌶️", attributes: ["brunch", "spicy", "japanese"], dietary: [] },
  { name: "Spicy Tofu Stir Fry 🌶️", attributes: ["brunch", "spicy", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Spicy Curry Rice 🍛", attributes: ["brunch", "spicy", "japanese"], dietary: ["vegetarian"] },

  // Umami
  { name: "Miso Soup 🍲", attributes: ["brunch", "umami", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Seaweed Salad 🥗", attributes: ["brunch", "umami", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Grilled Tofu 🍢", attributes: ["brunch", "umami", "japanese"], dietary: ["vegan", "gluten-free"] },

  // Sour
  { name: "Pickled Ginger 🍥", attributes: ["brunch", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Citrus Ponzu Salad 🥗", attributes: ["brunch", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Yuzu Jelly 🍮", attributes: ["brunch", "sour", "japanese"], dietary: ["vegetarian"] },

  // Bitter
  { name: "Green Tea 🍵", attributes: ["brunch", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },
  { name: "Matcha Latte 🍵", attributes: ["brunch", "bitter", "japanese"], dietary: ["vegetarian"] },
  { name: "Sencha Tea 🍵", attributes: ["brunch", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },

  // INDIAN
  // Sweet
  { name: "Kesari Bath 🍚", attributes: ["brunch", "sweet", "indian"], dietary: ["vegetarian"] },
  { name: "Gulab Jamun 🍮", attributes: ["brunch", "sweet", "indian"], dietary: ["vegetarian"] },
  { name: "Kheer 🍚", attributes: ["brunch", "sweet", "indian"], dietary: ["vegetarian"] },

  // Savory
  { name: "Paratha 🫓", attributes: ["brunch", "savory", "indian"], dietary: ["vegetarian"] },
  { name: "Idli & Sambar 🍛", attributes: ["brunch", "savory", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Poha 🍲", attributes: ["brunch", "savory", "indian"], dietary: ["vegan", "gluten-free"] },

  // Spicy
  { name: "Masala Dosa 🌶️", attributes: ["brunch", "spicy", "indian"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Paneer Bhurji 🌶️", attributes: ["brunch", "spicy", "indian"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Spicy Chickpea Curry 🌶️", attributes: ["brunch", "spicy", "indian"], dietary: ["vegan", "gluten-free"] },

  // Umami
  { name: "Samosa 🥟", attributes: ["brunch", "umami", "indian"], dietary: ["vegetarian"] },
  { name: "Paneer Tikka 🧀", attributes: ["brunch", "umami", "indian"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Chana Masala 🍛", attributes: ["brunch", "umami", "indian"], dietary: ["vegan", "gluten-free"] },

  // Sour
  { name: "Tamarind Chutney 🥄", attributes: ["brunch", "sour", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Lemon Rice 🍋", attributes: ["brunch", "sour", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Citrus Lassi 🍹", attributes: ["brunch", "sour", "indian"], dietary: ["vegetarian"] },

  // Bitter
  { name: "Chai Tea ☕", attributes: ["brunch", "bitter", "indian"], dietary: ["vegetarian"] },
  { name: "Black Coffee ☕", attributes: ["brunch", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },
  { name: "Masala Tea ☕", attributes: ["brunch", "bitter", "indian"], dietary: ["vegetarian"] },

  // MIDDLE-EASTERN
  // Sweet
  { name: "Baklava 🥮", attributes: ["brunch", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Ma'amoul 🥠", attributes: ["brunch", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Date Rolls 🌴", attributes: ["brunch", "sweet", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

  // Savory
  { name: "Labneh with Olive Oil 🧀", attributes: ["brunch", "savory", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Falafel Wrap 🌯", attributes: ["brunch", "savory", "middle-eastern"], dietary: ["vegan"] },
  { name: "Shakshuka 🍳", attributes: ["brunch", "savory", "middle-eastern"], dietary: ["vegetarian", "gluten-free"] },

  // Spicy
  { name: "Spicy Shakshuka 🌶️", attributes: ["brunch", "spicy", "middle-eastern"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Harissa Veggie Wrap 🌶️", attributes: ["brunch", "spicy", "middle-eastern"], dietary: ["vegan"] },
  { name: "Spicy Hummus Plate 🌶️", attributes: ["brunch", "spicy", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

  // Umami
  { name: "Hummus 🥣", attributes: ["brunch", "umami", "middle-eastern"], dietary: ["vegan"] },
  { name: "Mushroom Pita 🍄", attributes: ["brunch", "umami", "middle-eastern"], dietary: ["vegan"] },
  { name: "Cheese Borek 🧀", attributes: ["brunch", "umami", "middle-eastern"], dietary: ["vegetarian"] },

  // Sour
  { name: "Labneh with Lemon 🥛", attributes: ["brunch", "sour", "middle-eastern"], dietary: ["vegetarian"] },
  { name: "Pickled Vegetables 🥒", attributes: ["brunch", "sour", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
  { name: "Citrus Salad 🍊", attributes: ["brunch", "sour", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

  // Bitter
  { name: "Arabic Coffee ☕", attributes: ["brunch", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
  { name: "Green Tea 🍵", attributes: ["brunch", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
  { name: "Mint Tea 🍃", attributes: ["brunch", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

  // ITALIAN
  // Sweet
  { name: "Cornetto 🥐", attributes: ["brunch", "sweet", "italian"], dietary: ["vegetarian"] },
  { name: "Tiramisu 🍰", attributes: ["brunch", "sweet", "italian"], dietary: ["vegetarian"] },
  { name: "Panna Cotta 🍮", attributes: ["brunch", "sweet", "italian"], dietary: ["vegetarian"] },

  // Savory
  { name: "Frittata 🥚", attributes: ["brunch", "savory", "italian"], dietary: ["vegetarian"] },
  { name: "Caprese Salad 🍅", attributes: ["brunch", "savory", "italian"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Bruschetta 🍞", attributes: ["brunch", "savory", "italian"], dietary: ["vegetarian"] },

  // Spicy
  { name: "Arrabbiata Pasta 🌶️", attributes: ["brunch", "spicy", "italian"], dietary: ["vegetarian"] },
  { name: "Spicy Sausage Pizza 🌶️", attributes: ["brunch", "spicy", "italian"], dietary: [] },
  { name: "Spicy Veggie Frittata 🌶️", attributes: ["brunch", "spicy", "italian"], dietary: ["vegetarian"] },

  // Umami
  { name: "Mushroom Risotto 🍄", attributes: ["brunch", "umami", "italian"], dietary: ["vegetarian"] },
  { name: "Parmesan Polenta 🧀", attributes: ["brunch", "umami", "italian"], dietary: ["vegetarian"] },
  { name: "Tomato Basil Soup 🍅", attributes: ["brunch", "umami", "italian"], dietary: ["vegan"] },

  // Sour
  { name: "Caprese Salad with Lemon 🍋", attributes: ["brunch", "sour", "italian"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Lemon Granita 🍧", attributes: ["brunch", "sour", "italian"], dietary: ["vegan", "gluten-free"] },
  { name: "Orange Fennel Salad 🍊", attributes: ["brunch", "sour", "italian"], dietary: ["vegan", "gluten-free"] },

  // Bitter
  { name: "Espresso ☕", attributes: ["brunch", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },
  { name: "Cappuccino ☕", attributes: ["brunch", "bitter", "italian"], dietary: ["vegetarian"] },
  { name: "Iced Coffee 🧊", attributes: ["brunch", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },

  // LUNCH
  // --- AMERICAN ---
  // Sweet
  { name: "PB&J Sandwich 🥪", attributes: ["lunch", "sweet", "american"], dietary: ["vegetarian"] },
  { name: "Maple Pancakes 🥞", attributes: ["lunch", "sweet", "american"], dietary: ["vegetarian"] },
  { name: "Apple Pie Slice 🍏", attributes: ["lunch", "sweet", "american"], dietary: ["vegetarian"] },

  // Savory
  { name: "Cheeseburger 🍔", attributes: ["lunch", "savory", "american"], dietary: [] },
  { name: "Grilled Cheese 🥪", attributes: ["lunch", "savory", "american"], dietary: ["vegetarian"] },
  { name: "Club Sandwich 🥪", attributes: ["lunch", "savory", "american"], dietary: [] },

  // Spicy
  { name: "Buffalo Wings 🌶️", attributes: ["lunch", "spicy", "american"], dietary: [] },
  { name: "Spicy Chicken Sandwich 🌶️", attributes: ["lunch", "spicy", "american"], dietary: [] },
  { name: "Jalapeño Cornbread 🌶️", attributes: ["lunch", "spicy", "american"], dietary: ["vegetarian"] },

  // Umami
  { name: "BBQ Pulled Pork Sandwich 🍖", attributes: ["lunch", "umami", "american"], dietary: [] },
  { name: "Beef Chili Bowl 🌶️", attributes: ["lunch", "umami", "american"], dietary: [] },
  { name: "Mushroom Burger 🍄", attributes: ["lunch", "umami", "american"], dietary: ["vegetarian"] },

  // Sour
  { name: "Coleslaw 🥗", attributes: ["lunch", "sour", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Pickle Chips 🥒", attributes: ["lunch", "sour", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Lemon Chicken Salad 🍋", attributes: ["lunch", "sour", "american"], dietary: [] },

  // Bitter
  { name: "Iced Coffee 🧊", attributes: ["lunch", "bitter", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Kale Salad 🥬", attributes: ["lunch", "bitter", "american"], dietary: ["vegan", "gluten-free"] },
  { name: "Dark Chocolate Square 🍫", attributes: ["lunch", "bitter", "american"], dietary: ["vegetarian", "gluten-free"] },

  // --- FRENCH ---
  // Sweet
  { name: "Crepe Suzette 🥞", attributes: ["lunch", "sweet", "french"], dietary: ["vegetarian"] },
  { name: "Fruit Tart 🍓", attributes: ["lunch", "sweet", "french"], dietary: ["vegetarian"] },
  { name: "Madeleine 🥮", attributes: ["lunch", "sweet", "french"], dietary: ["vegetarian"] },

  // Savory
  { name: "Quiche Lorraine 🥧", attributes: ["lunch", "savory", "french"], dietary: [] },
  { name: "Ratatouille 🥘", attributes: ["lunch", "savory", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Croque Monsieur 🥪", attributes: ["lunch", "savory", "french"], dietary: [] },

  // Spicy
  { name: "Piperade 🌶️", attributes: ["lunch", "spicy", "french"], dietary: ["vegetarian", "gluten-free"] },
  { name: "Spicy Niçoise Salad 🌶️", attributes: ["lunch", "spicy", "french"], dietary: ["gluten-free"] },
  { name: "Harissa Ratatouille 🌶️", attributes: ["lunch", "spicy", "french"], dietary: ["vegan", "gluten-free"] },

  // Umami
  { name: "Beef Bourguignon 🍖", attributes: ["lunch", "umami", "french"], dietary: [] },
  { name: "Mushroom Bourguignon 🍄", attributes: ["lunch", "umami", "french"], dietary: ["vegetarian"] },
  { name: "French Onion Soup 🧅", attributes: ["lunch", "umami", "french"], dietary: ["vegetarian"] },

  // Sour
  { name: "Salade Verte with Lemon 🍋", attributes: ["lunch", "sour", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Vinaigrette Salad 🥗", attributes: ["lunch", "sour", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Citrus Duck Salad 🍊", attributes: ["lunch", "sour", "french"], dietary: [] },

  // Bitter
  { name: "Endive Salad 🥬", attributes: ["lunch", "bitter", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Espresso ☕", attributes: ["lunch", "bitter", "french"], dietary: ["vegan", "gluten-free"] },
  { name: "Chicory Salad 🥗", attributes: ["lunch", "bitter", "french"], dietary: ["vegan", "gluten-free"] },

  // --- MEXICAN ---
  // Sweet
  { name: "Churros 🍩", attributes: ["lunch", "sweet", "mexican"], dietary: ["vegetarian"] },
  { name: "Pan de Muerto 🍞", attributes: ["lunch", "sweet", "mexican"], dietary: ["vegetarian"] },
  { name: "Flan 🍮", attributes: ["lunch", "sweet", "mexican"], dietary: ["vegetarian"] },

  // Savory
  { name: "Taco 🌮", attributes: ["lunch", "savory", "mexican"], dietary: [] },
  { name: "Quesadilla 🧀", attributes: ["lunch", "savory", "mexican"], dietary: ["vegetarian"] },
  { name: "Enchiladas 🌯", attributes: ["lunch", "savory", "mexican"], dietary: [] },

  // Spicy
  { name: "Spicy Tacos 🌶️", attributes: ["lunch", "spicy", "mexican"], dietary: [] },
  { name: "Chili Relleno 🌶️", attributes: ["lunch", "spicy", "mexican"], dietary: ["vegetarian"] },
  { name: "Spicy Burrito 🌯", attributes: ["lunch", "spicy", "mexican"], dietary: [] },

  // Umami
  { name: "Mole Chicken 🍗", attributes: ["lunch", "umami", "mexican"], dietary: [] },
  { name: "Black Bean Soup 🍲", attributes: ["lunch", "umami", "mexican"], dietary: ["vegan", "gluten-free"] },
  { name: "Cheese Quesadilla 🧀", attributes: ["lunch", "umami", "mexican"], dietary: ["vegetarian"] },

  // Sour
  { name: "Ceviche 🐟", attributes: ["lunch", "sour", "mexican"], dietary: ["gluten-free"] },
  { name: "Lime Chicken Salad 🍋", attributes: ["lunch", "sour", "mexican"], dietary: [] },
  { name: "Pickled Jalapeños 🌶️", attributes: ["lunch", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },

  // Bitter
  { name: "Horchata ☕", attributes: ["lunch", "bitter", "mexican"], dietary: ["vegetarian"] },
  { name: "Cacao Drink 🍫", attributes: ["lunch", "bitter", "mexican"], dietary: ["vegan"] },
  { name: "Iced Coffee 🧊", attributes: ["lunch", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },

// --- CHINESE ---
// Sweet
{ name: "Sweet Red Bean Bun 🥮", attributes: ["lunch", "sweet", "chinese"], dietary: ["vegetarian"] },
{ name: "Egg Tart 🥧", attributes: ["lunch", "sweet", "chinese"], dietary: ["vegetarian"] },
{ name: "Mango Pudding 🥭", attributes: ["lunch", "sweet", "chinese"], dietary: ["vegetarian", "gluten-free"] },

// Savory
{ name: "Kung Pao Chicken 🌶️", attributes: ["lunch", "savory", "chinese"], dietary: [] },
{ name: "Vegetable Stir Fry 🥦", attributes: ["lunch", "savory", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Beef Chow Mein 🍜", attributes: ["lunch", "savory", "chinese"], dietary: [] },

// Spicy
{ name: "Sichuan Mapo Tofu 🌶️", attributes: ["lunch", "spicy", "chinese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Spicy Dan Dan Noodles 🌶️", attributes: ["lunch", "spicy", "chinese"], dietary: [] },
{ name: "Kung Pao Tofu 🌶️", attributes: ["lunch", "spicy", "chinese"], dietary: ["vegetarian", "gluten-free"] },

// Umami
{ name: "Char Siu Pork 🍖", attributes: ["lunch", "umami", "chinese"], dietary: [] },
{ name: "Mushroom Fried Rice 🍄", attributes: ["lunch", "umami", "chinese"], dietary: ["vegetarian"] },
{ name: "Dumplings 🥟", attributes: ["lunch", "umami", "chinese"], dietary: [] },

// Sour
{ name: "Sweet and Sour Pork 🍋", attributes: ["lunch", "sour", "chinese"], dietary: [] },
{ name: "Pickled Vegetables 🥒", attributes: ["lunch", "sour", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Hot and Sour Soup 🍲", attributes: ["lunch", "sour", "chinese"], dietary: ["vegetarian"] },

// Bitter
{ name: "Bitter Melon Stir Fry 🥬", attributes: ["lunch", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Pu'er Tea ☕", attributes: ["lunch", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Chrysanthemum Tea 🌼", attributes: ["lunch", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },

// --- JAPANESE ---
// Sweet
{ name: "Dorayaki 🥞", attributes: ["lunch", "sweet", "japanese"], dietary: ["vegetarian"] },
{ name: "Mochi 🍡", attributes: ["lunch", "sweet", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Anmitsu 🍧", attributes: ["lunch", "sweet", "japanese"], dietary: ["vegetarian", "gluten-free"] },

// Savory
{ name: "Sushi 🍣", attributes: ["lunch", "savory", "japanese"], dietary: ["gluten-free"] },
{ name: "Onigiri 🍙", attributes: ["lunch", "savory", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Tempura 🍤", attributes: ["lunch", "savory", "japanese"], dietary: [] },

// Spicy
{ name: "Spicy Tuna Roll 🌶️", attributes: ["lunch", "spicy", "japanese"], dietary: [] },
{ name: "Spicy Ramen 🌶️", attributes: ["lunch", "spicy", "japanese"], dietary: [] },
{ name: "Wasabi Edamame 🌶️", attributes: ["lunch", "spicy", "japanese"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Miso Ramen 🍲", attributes: ["lunch", "umami", "japanese"], dietary: ["vegetarian"] },
{ name: "Unagi Don 🐟", attributes: ["lunch", "umami", "japanese"], dietary: [] },
{ name: "Shiitake Stir Fry 🍄", attributes: ["lunch", "umami", "japanese"], dietary: ["vegan", "gluten-free"] },

// Sour
{ name: "Pickled Ginger 🍋", attributes: ["lunch", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Ponzu Salad 🥗", attributes: ["lunch", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Citrus Yakitori 🍋", attributes: ["lunch", "sour", "japanese"], dietary: [] },

// Bitter
{ name: "Green Tea 🍵", attributes: ["lunch", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Bitter Melon Nimono 🥬", attributes: ["lunch", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Sencha Tea 🍃", attributes: ["lunch", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },

// --- INDIAN ---
// Sweet
{ name: "Gulab Jamun 🍬", attributes: ["lunch", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Rasgulla 🍮", attributes: ["lunch", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Kheer 🍚", attributes: ["lunch", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },

// Savory
{ name: "Paneer Tikka 🧀", attributes: ["lunch", "savory", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Chana Masala 🥫", attributes: ["lunch", "savory", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Butter Chicken 🍗", attributes: ["lunch", "savory", "indian"], dietary: [] },

// Spicy
{ name: "Vindaloo 🌶️", attributes: ["lunch", "spicy", "indian"], dietary: [] },
{ name: "Spicy Paneer 🌶️", attributes: ["lunch", "spicy", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Chicken Tikka 🌶️", attributes: ["lunch", "spicy", "indian"], dietary: [] },

// Umami
{ name: "Dal Makhani 🍛", attributes: ["lunch", "umami", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Mutton Curry 🍖", attributes: ["lunch", "umami", "indian"], dietary: [] },
{ name: "Mushroom Masala 🍄", attributes: ["lunch", "umami", "indian"], dietary: ["vegan", "gluten-free"] },

// Sour
{ name: "Tamarind Rice 🍋", attributes: ["lunch", "sour", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Lemon Rice 🍋", attributes: ["lunch", "sour", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Pickled Mango 🥭", attributes: ["lunch", "sour", "indian"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Bitter Gourd Curry 🥬", attributes: ["lunch", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Fenugreek Leaves Curry 🌿", attributes: ["lunch", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Indian Black Tea ☕", attributes: ["lunch", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },

// --- MIDDLE-EASTERN ---
// Sweet
{ name: "Baklava 🥮", attributes: ["lunch", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Ma'amoul 🥠", attributes: ["lunch", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Basbousa 🍰", attributes: ["lunch", "sweet", "middle-eastern"], dietary: ["vegetarian"] },

// Savory
{ name: "Falafel 🧆", attributes: ["lunch", "savory", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Shawarma 🌯", attributes: ["lunch", "savory", "middle-eastern"], dietary: [] },
{ name: "Hummus with Pita 🫓", attributes: ["lunch", "savory", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

// Spicy
{ name: "Spicy Kofta 🌶️", attributes: ["lunch", "spicy", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Harissa Chicken 🌶️", attributes: ["lunch", "spicy", "middle-eastern"], dietary: [] },
{ name: "Spicy Lentil Soup 🌶️", attributes: ["lunch", "spicy", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Grilled Lamb 🐑", attributes: ["lunch", "umami", "middle-eastern"], dietary: [] },
{ name: "Mujadara 🍚", attributes: ["lunch", "umami", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Stuffed Grape Leaves 🍃", attributes: ["lunch", "umami", "middle-eastern"], dietary: ["vegan"] },

// Sour
{ name: "Fattoush Salad 🥗", attributes: ["lunch", "sour", "middle-eastern"], dietary: ["vegan"] },
{ name: "Sumac Chicken 🍋", attributes: ["lunch", "sour", "middle-eastern"], dietary: [] },
{ name: "Pickled Turnips 🥒", attributes: ["lunch", "sour", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Arak Cocktail 🍸", attributes: ["lunch", "bitter", "middle-eastern"], dietary: [] },
{ name: "Bitter Greens Salad 🥬", attributes: ["lunch", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Black Coffee ☕", attributes: ["lunch", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

// --- ITALIAN ---
// Sweet
{ name: "Tiramisu 🍰", attributes: ["lunch", "sweet", "italian"], dietary: ["vegetarian"] },
{ name: "Cannoli 🍮", attributes: ["lunch", "sweet", "italian"], dietary: ["vegetarian"] },
{ name: "Panna Cotta 🍮", attributes: ["lunch", "sweet", "italian"], dietary: ["vegetarian", "gluten-free"] },

// Savory
{ name: "Margherita Pizza 🍕", attributes: ["lunch", "savory", "italian"], dietary: ["vegetarian"] },
{ name: "Lasagna 🍝", attributes: ["lunch", "savory", "italian"], dietary: [] },
{ name: "Pasta Primavera 🍝", attributes: ["lunch", "savory", "italian"], dietary: ["vegetarian"] },

// Spicy
{ name: "Arrabbiata Pasta 🌶️", attributes: ["lunch", "spicy", "italian"], dietary: ["vegetarian"] },
{ name: "Spicy Sausage Pizza 🌶️", attributes: ["lunch", "spicy", "italian"], dietary: [] },
{ name: "Spicy Penne 🌶️", attributes: ["lunch", "spicy", "italian"], dietary: ["vegetarian"] },

// Umami
{ name: "Bolognese 🍝", attributes: ["lunch", "umami", "italian"], dietary: [] },
{ name: "Mushroom Risotto 🍄", attributes: ["lunch", "umami", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Parmigiana di Melanzane 🍆", attributes: ["lunch", "umami", "italian"], dietary: ["vegetarian", "gluten-free"] },

// Sour
{ name: "Lemon Risotto 🍋", attributes: ["lunch", "sour", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Caprese Salad 🍅", attributes: ["lunch", "sour", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Citrus Marinated Olives 🍋", attributes: ["lunch", "sour", "italian"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Espresso ☕", attributes: ["lunch", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },
{ name: "Radicchio Salad 🥬", attributes: ["lunch", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },
{ name: "Cicoria Ripassata 🥬", attributes: ["lunch", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Mango Sticky Rice 🍚🥭", attributes: ["lunch", "sweet", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Thai Coconut Custard 🍮", attributes: ["lunch", "sweet", "thai"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Thai Tea Ice Cream 🍨", attributes: ["lunch", "sweet", "thai"], dietary: ["vegetarian"] },

// Savory
{ name: "Pad Thai 🍜", attributes: ["lunch", "savory", "thai"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Green Curry 🍛", attributes: ["lunch", "savory", "thai"], dietary: ["gluten-free"] },
{ name: "Thai Basil Chicken 🍗🌿", attributes: ["lunch", "savory", "thai"], dietary: [] },

// Spicy
{ name: "Tom Yum Soup 🍲🌶️", attributes: ["lunch", "spicy", "thai"], dietary: ["gluten-free"] },
{ name: "Som Tum (Papaya Salad) 🥗🌶️", attributes: ["lunch", "spicy", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Spicy Thai Drunken Noodles 🍜🌶️", attributes: ["lunch", "spicy", "thai"], dietary: ["vegetarian"] },

// Umami
{ name: "Massaman Curry 🍛", attributes: ["lunch", "umami", "thai"], dietary: ["gluten-free"] },
{ name: "Thai Fried Rice 🍚", attributes: ["lunch", "umami", "thai"], dietary: ["vegetarian"] },
{ name: "Tom Kha Gai 🥥🍗", attributes: ["lunch", "umami", "thai"], dietary: ["gluten-free"] },

// Sour
{ name: "Nam Prik Ong 🌶️🍅", attributes: ["lunch", "sour", "thai"], dietary: ["gluten-free"] },
{ name: "Pla Neung Manao (Steamed Fish with Lime) 🐟🍋", attributes: ["lunch", "sour", "thai"], dietary: ["gluten-free"] },
{ name: "Thai Pickled Vegetables 🥒", attributes: ["lunch", "sour", "thai"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Bitter Melon Stir-Fry 🍲", attributes: ["lunch", "bitter", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Thai Herbal Tea 🍵", attributes: ["lunch", "bitter", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Stir-Fried Morning Glory (Pak Boong) 🌿", attributes: ["lunch", "bitter", "thai"], dietary: ["vegan", "gluten-free"] },


// --- AMERICAN ---
// Sweet
{ name: "Apple Pie 🥧", attributes: ["dinner", "sweet", "american"], dietary: ["vegetarian"] },
{ name: "Brownies 🍫", attributes: ["dinner", "sweet", "american"], dietary: ["vegetarian"] },
{ name: "Cheesecake 🍰", attributes: ["dinner", "sweet", "american"], dietary: ["vegetarian"] },

// Savory
{ name: "BBQ Ribs 🍖", attributes: ["dinner", "savory", "american"], dietary: [] },
{ name: "Mac and Cheese 🧀", attributes: ["dinner", "savory", "american"], dietary: ["vegetarian"] },
{ name: "Roast Chicken 🍗", attributes: ["dinner", "savory", "american"], dietary: [] },

// Spicy
{ name: "Buffalo Wings 🌶️", attributes: ["dinner", "spicy", "american"], dietary: [] },
{ name: "Cajun Jambalaya 🌶️", attributes: ["dinner", "spicy", "american"], dietary: [] },
{ name: "Spicy Chili 🌶️", attributes: ["dinner", "spicy", "american"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Beef Burger 🍔", attributes: ["dinner", "umami", "american"], dietary: [] },
{ name: "Mushroom Stroganoff 🍄", attributes: ["dinner", "umami", "american"], dietary: ["vegetarian"] },
{ name: "Grilled Salmon 🐟", attributes: ["dinner", "umami", "american"], dietary: ["gluten-free"] },

// Sour
{ name: "Cobb Salad 🥗", attributes: ["dinner", "sour", "american"], dietary: ["gluten-free"] },
{ name: "Lemon Chicken 🍋", attributes: ["dinner", "sour", "american"], dietary: [] },
{ name: "Coleslaw 🥬", attributes: ["dinner", "sour", "american"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Kale Salad 🥬", attributes: ["dinner", "bitter", "american"], dietary: ["vegan", "gluten-free"] },
{ name: "Endive Salad 🥬", attributes: ["dinner", "bitter", "american"], dietary: ["vegan", "gluten-free"] },
{ name: "Black Coffee ☕", attributes: ["dinner", "bitter", "american"], dietary: ["vegan", "gluten-free"] },

// --- ITALIAN ---
{ name: "Tiramisu 🍰", attributes: ["dinner", "sweet", "italian"], dietary: ["vegetarian"] },
{ name: "Gelato 🍨", attributes: ["dinner", "sweet", "italian"], dietary: ["vegetarian"] },
{ name: "Panna Cotta 🍮", attributes: ["dinner", "sweet", "italian"], dietary: ["vegetarian", "gluten-free"] },

{ name: "Lasagna 🍝", attributes: ["dinner", "savory", "italian"], dietary: [] },
{ name: "Risotto 🍚", attributes: ["dinner", "savory", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Margherita Pizza 🍕", attributes: ["dinner", "savory", "italian"], dietary: ["vegetarian"] },

{ name: "Arrabbiata Pasta 🌶️", attributes: ["dinner", "spicy", "italian"], dietary: ["vegetarian"] },
{ name: "Spicy Sausage Pizza 🌶️", attributes: ["dinner", "spicy", "italian"], dietary: [] },
{ name: "Spicy Penne 🌶️", attributes: ["dinner", "spicy", "italian"], dietary: ["vegetarian"] },

{ name: "Bolognese 🍝", attributes: ["dinner", "umami", "italian"], dietary: [] },
{ name: "Mushroom Risotto 🍄", attributes: ["dinner", "umami", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Parmigiana di Melanzane 🍆", attributes: ["dinner", "umami", "italian"], dietary: ["vegetarian", "gluten-free"] },

{ name: "Caprese Salad 🍅", attributes: ["dinner", "sour", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Lemon Risotto 🍋", attributes: ["dinner", "sour", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Citrus Marinated Olives 🍋", attributes: ["dinner", "sour", "italian"], dietary: ["vegan", "gluten-free"] },

{ name: "Radicchio Salad 🥬", attributes: ["dinner", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },
{ name: "Cicoria Ripassata 🥬", attributes: ["dinner", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },
{ name: "Espresso ☕", attributes: ["dinner", "bitter", "italian"], dietary: ["vegan", "gluten-free"] },

// --- MEXICAN ---
{ name: "Churros 🍩", attributes: ["dinner", "sweet", "mexican"], dietary: ["vegetarian"] },
{ name: "Tres Leches Cake 🍰", attributes: ["dinner", "sweet", "mexican"], dietary: ["vegetarian"] },
{ name: "Flan 🍮", attributes: ["dinner", "sweet", "mexican"], dietary: ["vegetarian"] },

{ name: "Tacos 🌮", attributes: ["dinner", "savory", "mexican"], dietary: [] },
{ name: "Quesadilla 🫓", attributes: ["dinner", "savory", "mexican"], dietary: ["vegetarian"] },
{ name: "Enchiladas 🌯", attributes: ["dinner", "savory", "mexican"], dietary: [] },

{ name: "Spicy Chicken Tacos 🌶️", attributes: ["dinner", "spicy", "mexican"], dietary: [] },
{ name: "Spicy Chorizo Tacos 🌶️", attributes: ["dinner", "spicy", "mexican"], dietary: [] },
{ name: "Spicy Veggie Fajitas 🌶️", attributes: ["dinner", "spicy", "mexican"], dietary: ["vegan"] },

{ name: "Carnitas 🌮", attributes: ["dinner", "umami", "mexican"], dietary: [] },
{ name: "Mole Chicken 🍗", attributes: ["dinner", "umami", "mexican"], dietary: [] },
{ name: "Grilled Mushrooms 🌿", attributes: ["dinner", "umami", "mexican"], dietary: ["vegan", "gluten-free"] },

{ name: "Guacamole 🥑", attributes: ["dinner", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },
{ name: "Ceviche 🐟", attributes: ["dinner", "sour", "mexican"], dietary: ["gluten-free"] },
{ name: "Pico de Gallo 🍅", attributes: ["dinner", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },

{ name: "Black Coffee ☕", attributes: ["dinner", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },
{ name: "Cactus Salad 🌵", attributes: ["dinner", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },
{ name: "Radicchio Tacos 🥬", attributes: ["dinner", "bitter", "mexican"], dietary: ["vegan", "gluten-free"] },

// --- CHINESE ---
{ name: "Mango Pudding 🥭", attributes: ["dinner", "sweet", "chinese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Red Bean Bun 🍡", attributes: ["dinner", "sweet", "chinese"], dietary: ["vegetarian"] },
{ name: "Almond Jelly 🍮", attributes: ["dinner", "sweet", "chinese"], dietary: ["vegetarian", "gluten-free"] },

{ name: "Kung Pao Chicken 🍗", attributes: ["dinner", "savory", "chinese"], dietary: [] },
{ name: "Mapo Tofu 🍲", attributes: ["dinner", "savory", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Sweet and Sour Pork 🍖", attributes: ["dinner", "savory", "chinese"], dietary: [] },

// Sweet
{ name: "Mochi 🍡", attributes: ["dinner", "sweet", "japanese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Dorayaki 🥞", attributes: ["dinner", "sweet", "japanese"], dietary: ["vegetarian"] },
{ name: "Anmitsu 🍮", attributes: ["dinner", "sweet", "japanese"], dietary: ["vegetarian", "gluten-free"] },

// Savory
{ name: "Sushi 🍣", attributes: ["dinner", "savory", "japanese"], dietary: ["gluten-free"] },
{ name: "Tempura 🍤", attributes: ["dinner", "savory", "japanese"], dietary: [] },
{ name: "Okonomiyaki 🥞", attributes: ["dinner", "savory", "japanese"], dietary: ["vegetarian"] },

// Spicy
{ name: "Spicy Tuna Roll 🌶️", attributes: ["dinner", "spicy", "japanese"], dietary: ["gluten-free"] },
{ name: "Kimchi Udon 🌶️", attributes: ["dinner", "spicy", "japanese"], dietary: ["vegetarian"] },
{ name: "Spicy Miso Ramen 🌶️", attributes: ["dinner", "spicy", "japanese"], dietary: [] },

// Umami
{ name: "Ramen 🍜", attributes: ["dinner", "umami", "japanese"], dietary: [] },
{ name: "Miso Soup 🍲", attributes: ["dinner", "umami", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Grilled Eel 🍣", attributes: ["dinner", "umami", "japanese"], dietary: [] },

// Sour
{ name: "Pickled Vegetables 🥒", attributes: ["dinner", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Sunomono Salad 🥗", attributes: ["dinner", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Yuzu Chicken 🍋", attributes: ["dinner", "sour", "japanese"], dietary: [] },

// Bitter
{ name: "Green Tea 🍵", attributes: ["dinner", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Bitter Melon Stir-Fry 🥬", attributes: ["dinner", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Matcha Dessert 🍵", attributes: ["dinner", "bitter", "japanese"], dietary: ["vegetarian"] },

// Sweet
{ name: "Gulab Jamun 🍬", attributes: ["dinner", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Rasgulla 🍮", attributes: ["dinner", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Kheer 🍚", attributes: ["dinner", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },

// Savory
{ name: "Paneer Butter Masala 🧀", attributes: ["dinner", "savory", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Chicken Tikka 🍗", attributes: ["dinner", "savory", "indian"], dietary: ["gluten-free"] },
{ name: "Chole 🥘", attributes: ["dinner", "savory", "indian"], dietary: ["vegan", "gluten-free"] },

// Spicy
{ name: "Vindaloo 🌶️", attributes: ["dinner", "spicy", "indian"], dietary: [] },
{ name: "Spicy Paneer 🌶️", attributes: ["dinner", "spicy", "indian"], dietary: ["vegetarian"] },
{ name: "Spicy Lentil Curry 🌶️", attributes: ["dinner", "spicy", "indian"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Daal Tadka 🌿", attributes: ["dinner", "umami", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Lamb Rogan Josh 🥩", attributes: ["dinner", "umami", "indian"], dietary: ["gluten-free"] },
{ name: "Mushroom Masala 🍄", attributes: ["dinner", "umami", "indian"], dietary: ["vegetarian", "gluten-free"] },

// Sour
{ name: "Tamarind Chutney 🥭", attributes: ["dinner", "sour", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Lemon Rice 🍋", attributes: ["dinner", "sour", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Pickled Mango 🥭", attributes: ["dinner", "sour", "indian"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Karela Sabzi 🥬", attributes: ["dinner", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Fenugreek Curry 🌿", attributes: ["dinner", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Black Tea ☕", attributes: ["dinner", "bitter", "indian"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Mango Sticky Rice 🥭", attributes: ["dinner", "sweet", "thai"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Thai Coconut Custard 🥥", attributes: ["dinner", "sweet", "thai"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Thai Banana Fritters 🍌", attributes: ["dinner", "sweet", "thai"], dietary: ["vegetarian"] },

// Savory
{ name: "Pad Thai 🍜", attributes: ["dinner", "savory", "thai"], dietary: ["vegetarian"] },
{ name: "Green Curry 🍛", attributes: ["dinner", "savory", "thai"], dietary: ["gluten-free"] },
{ name: "Massaman Curry 🥘", attributes: ["dinner", "savory", "thai"], dietary: ["gluten-free"] },

// Spicy
{ name: "Tom Yum Soup 🌶️", attributes: ["dinner", "spicy", "thai"], dietary: ["gluten-free"] },
{ name: "Spicy Basil Chicken 🌶️", attributes: ["dinner", "spicy", "thai"], dietary: ["gluten-free"] },
{ name: "Papaya Salad 🌶️", attributes: ["dinner", "spicy", "thai"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Thai Fish Cakes 🐟", attributes: ["dinner", "umami", "thai"], dietary: [] },
{ name: "Tofu Satay 🍢", attributes: ["dinner", "umami", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Mushroom Larb 🍄", attributes: ["dinner", "umami", "thai"], dietary: ["vegetarian", "gluten-free"] },

// Sour
{ name: "Tom Kha Soup 🍋", attributes: ["dinner", "sour", "thai"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Lime & Chili Salad 🍋", attributes: ["dinner", "sour", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Tamarind Prawns 🍤", attributes: ["dinner", "sour", "thai"], dietary: ["gluten-free"] },

// Bitter
{ name: "Bitter Melon Stir-Fry 🥬", attributes: ["dinner", "bitter", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Thai Green Tea 🍵", attributes: ["dinner", "bitter", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Herbal Soup 🌿", attributes: ["dinner", "bitter", "thai"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Crème Brûlée 🍮", attributes: ["dinner", "sweet", "french"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Chocolate Mousse 🍫", attributes: ["dinner", "sweet", "french"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Tarte Tatin 🍏", attributes: ["dinner", "sweet", "french"], dietary: ["vegetarian"] },

// Savory
{ name: "Coq au Vin 🍗", attributes: ["dinner", "savory", "french"], dietary: [] },
{ name: "Ratatouille 🍆", attributes: ["dinner", "savory", "french"], dietary: ["vegan", "gluten-free"] },
{ name: "Quiche Lorraine 🥧", attributes: ["dinner", "savory", "french"], dietary: ["vegetarian"] },

// Spicy
{ name: "Piperade 🌶️", attributes: ["dinner", "spicy", "french"], dietary: ["vegetarian"] },
{ name: "Spicy Provençal Chicken 🌶️", attributes: ["dinner", "spicy", "french"], dietary: [] },
{ name: "Curry Lentil Soup 🌶️", attributes: ["dinner", "spicy", "french"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Beef Bourguignon 🥩", attributes: ["dinner", "umami", "french"], dietary: [] },
{ name: "Mushroom Fricassée 🍄", attributes: ["dinner", "umami", "french"], dietary: ["vegetarian"] },
{ name: "Duck Confit 🦆", attributes: ["dinner", "umami", "french"], dietary: [] },

// Sour
{ name: "Lemon Tart 🍋", attributes: ["dinner", "sour", "french"], dietary: ["vegetarian"] },
{ name: "Vinaigrette Salad 🥗", attributes: ["dinner", "sour", "french"], dietary: ["vegan", "gluten-free"] },
{ name: "Pickled Vegetables 🥒", attributes: ["dinner", "sour", "french"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Endive Salad 🥬", attributes: ["dinner", "bitter", "french"], dietary: ["vegan", "gluten-free"] },
{ name: "Coffee ☕", attributes: ["dinner", "bitter", "french"], dietary: ["vegan", "gluten-free"] },
{ name: "Herbal Infusion 🌿", attributes: ["dinner", "bitter", "french"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Baklava 🥮", attributes: ["dinner", "sweet", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Greek Yogurt with Honey 🍯", attributes: ["dinner", "sweet", "mediterranean"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Semolina Cake 🍰", attributes: ["dinner", "sweet", "mediterranean"], dietary: ["vegetarian"] },

// Savory
{ name: "Moussaka 🍆", attributes: ["dinner", "savory", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Grilled Lamb Chops 🥩", attributes: ["dinner", "savory", "mediterranean"], dietary: ["gluten-free"] },
{ name: "Falafel Wrap 🌯", attributes: ["dinner", "savory", "mediterranean"], dietary: ["vegan"] },

// Spicy
{ name: "Spicy Shakshuka 🌶️", attributes: ["dinner", "spicy", "mediterranean"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Harissa Chicken 🌶️", attributes: ["dinner", "spicy", "mediterranean"], dietary: ["gluten-free"] },
{ name: "Spicy Lentil Stew 🌶️", attributes: ["dinner", "spicy", "mediterranean"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Grilled Eggplant with Feta 🍆", attributes: ["dinner", "umami", "mediterranean"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Seafood Paella 🦐", attributes: ["dinner", "umami", "mediterranean"], dietary: ["gluten-free"] },
{ name: "Stuffed Grape Leaves 🍇", attributes: ["dinner", "umami", "mediterranean"], dietary: ["vegan", "gluten-free"] },

// Sour
{ name: "Tabbouleh 🥗", attributes: ["dinner", "sour", "mediterranean"], dietary: ["vegan", "gluten-free"] },
{ name: "Lemon Chicken 🍋", attributes: ["dinner", "sour", "mediterranean"], dietary: ["gluten-free"] },
{ name: "Yogurt Cucumber Salad 🥒", attributes: ["dinner", "sour", "mediterranean"], dietary: ["vegetarian", "gluten-free"] },

// Bitter
{ name: "Radicchio Salad 🥬", attributes: ["dinner", "bitter", "mediterranean"], dietary: ["vegan", "gluten-free"] },
{ name: "Olives & Capers 🫒", attributes: ["dinner", "bitter", "mediterranean"], dietary: ["vegan", "gluten-free"] },
{ name: "Herbal Tea 🌿", attributes: ["dinner", "bitter", "mediterranean"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Hotteok 🥞", attributes: ["dinner", "sweet", "korean"], dietary: ["vegetarian"] },
{ name: "Patbingsu 🍧", attributes: ["dinner", "sweet", "korean"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Yakgwa 🍯", attributes: ["dinner", "sweet", "korean"], dietary: ["vegetarian"] },

// Savory
{ name: "Bibimbap 🥘", attributes: ["dinner", "savory", "korean"], dietary: ["vegetarian"] },
{ name: "Bulgogi 🥩", attributes: ["dinner", "savory", "korean"], dietary: [] },
{ name: "Kimchi Fried Rice 🍚", attributes: ["dinner", "savory", "korean"], dietary: ["vegetarian"] },

// Spicy
{ name: "Tteokbokki 🌶️", attributes: ["dinner", "spicy", "korean"], dietary: ["vegetarian"] },
{ name: "Spicy Chicken Stew 🌶️", attributes: ["dinner", "spicy", "korean"], dietary: [] },
{ name: "Kimchi Jjigae 🌶️", attributes: ["dinner", "spicy", "korean"], dietary: ["gluten-free"] },

// Umami
{ name: "Japchae 🍜", attributes: ["dinner", "umami", "korean"], dietary: ["vegetarian"] },
{ name: "Soy-Glazed Tofu 🍢", attributes: ["dinner", "umami", "korean"], dietary: ["vegan", "gluten-free"] },
{ name: "Galbi 🥩", attributes: ["dinner", "umami", "korean"], dietary: [] },

// Sour
{ name: "Kimchi 🥬", attributes: ["dinner", "sour", "korean"], dietary: ["vegan", "gluten-free"] },
{ name: "Pickled Radish 🥕", attributes: ["dinner", "sour", "korean"], dietary: ["vegan", "gluten-free"] },
{ name: "Vinegar Cucumber Salad 🥒", attributes: ["dinner", "sour", "korean"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Korean Bitter Melon Stir-Fry 🥬", attributes: ["dinner", "bitter", "korean"], dietary: ["vegan", "gluten-free"] },
{ name: "Green Tea 🍵", attributes: ["dinner", "bitter", "korean"], dietary: ["vegan", "gluten-free"] },
{ name: "Herbal Infusion 🌿", attributes: ["dinner", "bitter", "korean"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Che Ba Mau 🍨", attributes: ["dinner", "sweet", "vietnamese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Banh Flan 🍮", attributes: ["dinner", "sweet", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Sticky Rice with Mango 🥭", attributes: ["dinner", "sweet", "vietnamese"], dietary: ["vegan", "gluten-free"] },

// Savory
{ name: "Pho 🍜", attributes: ["dinner", "savory", "vietnamese"], dietary: ["gluten-free"] },
{ name: "Banh Xeo 🥞", attributes: ["dinner", "savory", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Goi Cuon 🥗", attributes: ["dinner", "savory", "vietnamese"], dietary: ["vegan", "gluten-free"] },

// Spicy
{ name: "Bun Bo Hue 🌶️", attributes: ["dinner", "spicy", "vietnamese"], dietary: ["gluten-free"] },
{ name: "Spicy Lemongrass Tofu 🌶️", attributes: ["dinner", "spicy", "vietnamese"], dietary: ["vegan", "gluten-free"] },
{ name: "Chili Crab 🌶️", attributes: ["dinner", "spicy", "vietnamese"], dietary: ["gluten-free"] },

// Umami
{ name: "Caramelized Pork 🍖", attributes: ["dinner", "umami", "vietnamese"], dietary: ["gluten-free"] },
{ name: "Mushroom Hotpot 🍄", attributes: ["dinner", "umami", "vietnamese"], dietary: ["vegan", "gluten-free"] },
{ name: "Grilled Fish with Herbs 🐟", attributes: ["dinner", "umami", "vietnamese"], dietary: ["gluten-free"] },

// Sour
{ name: "Canh Chua (Sour Soup) 🍲", attributes: ["dinner", "sour", "vietnamese"], dietary: ["gluten-free"] },
{ name: "Pickled Vegetables 🥒", attributes: ["dinner", "sour", "vietnamese"], dietary: ["vegan", "gluten-free"] },
{ name: "Lime & Fish Sauce Dressing 🍋", attributes: ["dinner", "sour", "vietnamese"], dietary: ["gluten-free"] },

// Bitter
{ name: "Bitter Melon Stir-Fry 🥬", attributes: ["dinner", "bitter", "vietnamese"], dietary: ["vegan", "gluten-free"] },
{ name: "Green Tea 🍵", attributes: ["dinner", "bitter", "vietnamese"], dietary: ["vegan", "gluten-free"] },
{ name: "Herbal Soup 🌿", attributes: ["dinner", "bitter", "vietnamese"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Knafeh 🧀", attributes: ["dinner", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Maamoul 🍪", attributes: ["dinner", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Halva 🍯", attributes: ["dinner", "sweet", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

// Savory
{ name: "Shawarma Wrap 🌯", attributes: ["dinner", "savory", "middle-eastern"], dietary: [] },
{ name: "Falafel Plate 🥙", attributes: ["dinner", "savory", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Stuffed Eggplant 🍆", attributes: ["dinner", "savory", "middle-eastern"], dietary: ["vegetarian", "gluten-free"] },

// Spicy
{ name: "Spicy Kofta 🌶️", attributes: ["dinner", "spicy", "middle-eastern"], dietary: ["gluten-free"] },
{ name: "Harissa Chicken 🌶️", attributes: ["dinner", "spicy", "middle-eastern"], dietary: ["gluten-free"] },
{ name: "Spicy Lentil Stew 🌶️", attributes: ["dinner", "spicy", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

// Umami
{ name: "Grilled Lamb 🥩", attributes: ["dinner", "umami", "middle-eastern"], dietary: ["gluten-free"] },
{ name: "Mushroom & Chickpea Stew 🍄", attributes: ["dinner", "umami", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Baba Ganoush 🍆", attributes: ["dinner", "umami", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

// Sour
{ name: "Tabbouleh 🥗", attributes: ["dinner", "sour", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Lemon Lentil Soup 🍋", attributes: ["dinner", "sour", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Yogurt Cucumber Salad 🥒", attributes: ["dinner", "sour", "middle-eastern"], dietary: ["vegetarian", "gluten-free"] },

// Bitter
{ name: "Arugula Salad 🥬", attributes: ["dinner", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Green Tea 🍵", attributes: ["dinner", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },
{ name: "Herbal Infusion 🌿", attributes: ["dinner", "bitter", "middle-eastern"], dietary: ["vegan", "gluten-free"] },

  // DESSERT
// Sweet
{ name: "Apple Pie 🥧", attributes: ["dessert", "sweet", "american"], dietary: ["vegetarian"] },
{ name: "Chocolate Brownie 🍫", attributes: ["dessert", "sweet", "american"], dietary: ["vegetarian"] },
{ name: "Pumpkin Cheesecake 🎃", attributes: ["dessert", "sweet", "american"], dietary: ["vegetarian"] },

// Spicy
{ name: "Chili Chocolate Truffles 🌶️", attributes: ["dessert", "spicy", "american"], dietary: ["vegetarian"] },
{ name: "Spiced Pumpkin Cookies 🌶️", attributes: ["dessert", "spicy", "american"], dietary: ["vegetarian"] },
{ name: "Gingerbread Men 🌶️", attributes: ["dessert", "spicy", "american"], dietary: ["vegetarian"] },

// Sour
{ name: "Lemon Bars 🍋", attributes: ["dessert", "sour", "american"], dietary: ["vegetarian"] },
{ name: "Key Lime Pie 🍋", attributes: ["dessert", "sour", "american"], dietary: ["vegetarian"] },
{ name: "Cranberry Muffins 🍋", attributes: ["dessert", "sour", "american"], dietary: ["vegetarian"] },

// Bitter
{ name: "Espresso Brownies ☕", attributes: ["dessert", "bitter", "american"], dietary: ["vegetarian"] },
{ name: "Dark Chocolate Tart ☕", attributes: ["dessert", "bitter", "american"], dietary: ["vegetarian"] },
{ name: "Mocha Mousse ☕", attributes: ["dessert", "bitter", "american"], dietary: ["vegetarian"] },

// Sweet
{ name: "Crème Brûlée 🍮", attributes: ["dessert", "sweet", "french"], dietary: ["vegetarian"] },
{ name: "Macarons 🍬", attributes: ["dessert", "sweet", "french"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Tarte Tatin 🍏", attributes: ["dessert", "sweet", "french"], dietary: ["vegetarian"] },

// Spicy
{ name: "Chili Chocolate Éclair 🌶️", attributes: ["dessert", "spicy", "french"], dietary: ["vegetarian"] },
{ name: "Ginger Madeleine 🌶️", attributes: ["dessert", "spicy", "french"], dietary: ["vegetarian"] },
{ name: "Spiced Pain d’Épices 🌶️", attributes: ["dessert", "spicy", "french"], dietary: ["vegetarian"] },

// Sour
{ name: "Lemon Meringue Tart 🍋", attributes: ["dessert", "sour", "french"], dietary: ["vegetarian"] },
{ name: "Citron Sorbet 🍋", attributes: ["dessert", "sour", "french"], dietary: ["vegan", "gluten-free"] },
{ name: "Raspberry Clafoutis 🍋", attributes: ["dessert", "sour", "french"], dietary: ["vegetarian"] },

// Bitter
{ name: "Chocolate Ganache Tart ☕", attributes: ["dessert", "bitter", "french"], dietary: ["vegetarian"] },
{ name: "Espresso Soufflé ☕", attributes: ["dessert", "bitter", "french"], dietary: ["vegetarian"] },
{ name: "Dark Chocolate Mousse ☕", attributes: ["dessert", "bitter", "french"], dietary: ["vegetarian"] },

// Sweet
{ name: "Tiramisu ☕", attributes: ["dessert", "sweet", "italian"], dietary: ["vegetarian"] },
{ name: "Panna Cotta 🍮", attributes: ["dessert", "sweet", "italian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Cannoli 🍪", attributes: ["dessert", "sweet", "italian"], dietary: ["vegetarian"] },

// Spicy
{ name: "Chili Chocolate Panforte 🌶️", attributes: ["dessert", "spicy", "italian"], dietary: ["vegetarian"] },
{ name: "Ginger Biscotti 🌶️", attributes: ["dessert", "spicy", "italian"], dietary: ["vegetarian"] },
{ name: "Spiced Pizzelle 🌶️", attributes: ["dessert", "spicy", "italian"], dietary: ["vegetarian"] },

// Sour
{ name: "Lemon Sorbetto 🍋", attributes: ["dessert", "sour", "italian"], dietary: ["vegan", "gluten-free"] },
{ name: "Amaretto Tart 🍋", attributes: ["dessert", "sour", "italian"], dietary: ["vegetarian"] },
{ name: "Citrus Granita 🍋", attributes: ["dessert", "sour", "italian"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Espresso Gelato ☕", attributes: ["dessert", "bitter", "italian"], dietary: ["vegetarian"] },
{ name: "Dark Chocolate Tartufo ☕", attributes: ["dessert", "bitter", "italian"], dietary: ["vegetarian"] },
{ name: "Amaro Chocolate Mousse ☕", attributes: ["dessert", "bitter", "italian"], dietary: ["vegetarian"] },

// Sweet
{ name: "Churros 🌯", attributes: ["dessert", "sweet", "mexican"], dietary: ["vegetarian"] },
{ name: "Tres Leches Cake 🥛", attributes: ["dessert", "sweet", "mexican"], dietary: ["vegetarian"] },
{ name: "Flan 🍮", attributes: ["dessert", "sweet", "mexican"], dietary: ["vegetarian"] },

// Spicy
{ name: "Chili Chocolate Brownies 🌶️", attributes: ["dessert", "spicy", "mexican"], dietary: ["vegetarian"] },
{ name: "Spiced Mexican Hot Chocolate 🌶️", attributes: ["dessert", "spicy", "mexican"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Gingerbread Pan de Muerto 🌶️", attributes: ["dessert", "spicy", "mexican"], dietary: ["vegetarian"] },

// Sour
{ name: "Lime Sorbet 🍋", attributes: ["dessert", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },
{ name: "Key Lime Tart 🍋", attributes: ["dessert", "sour", "mexican"], dietary: ["vegetarian"] },
{ name: "Tamarind Candy 🍋", attributes: ["dessert", "sour", "mexican"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Dark Chocolate Mole Cake ☕", attributes: ["dessert", "bitter", "mexican"], dietary: ["vegetarian"] },
{ name: "Cacao Nib Cookies ☕", attributes: ["dessert", "bitter", "mexican"], dietary: ["vegetarian"] },
{ name: "Espresso Flan ☕", attributes: ["dessert", "bitter", "mexican"], dietary: ["vegetarian"] },

// Sweet
{ name: "Mango Pudding 🥭", attributes: ["dessert", "sweet", "chinese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Red Bean Cake 🌰", attributes: ["dessert", "sweet", "chinese"], dietary: ["vegetarian"] },
{ name: "Egg Tart 🥚", attributes: ["dessert", "sweet", "chinese"], dietary: ["vegetarian"] },

// Spicy
{ name: "Spicy Chocolate Mooncake 🌶️", attributes: ["dessert", "spicy", "chinese"], dietary: ["vegetarian"] },
{ name: "Ginger Sesame Balls 🌶️", attributes: ["dessert", "spicy", "chinese"], dietary: ["vegetarian"] },
{ name: "Chili Chocolate Tangyuan 🌶️", attributes: ["dessert", "spicy", "chinese"], dietary: ["vegetarian"] },

// Sour
{ name: "Plum Sorbet 🍋", attributes: ["dessert", "sour", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Tamarind Candy 🍋", attributes: ["dessert", "sour", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Lemon Red Bean Cake 🍋", attributes: ["dessert", "sour", "chinese"], dietary: ["vegetarian"] },

// Bitter
{ name: "Dark Sesame Soup ☕", attributes: ["dessert", "bitter", "chinese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Pu-erh Tea Jelly ☕", attributes: ["dessert", "bitter", "chinese"], dietary: ["vegan", "gluten-free"] },
{ name: "Chocolate Mooncake ☕", attributes: ["dessert", "bitter", "chinese"], dietary: ["vegetarian"] },

// Sweet
{ name: "Mochi 🍡", attributes: ["dessert", "sweet", "japanese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Dorayaki 🥞", attributes: ["dessert", "sweet", "japanese"], dietary: ["vegetarian"] },
{ name: "Matcha Cake 🍵", attributes: ["dessert", "sweet", "japanese"], dietary: ["vegetarian"] },

// Spicy
{ name: "Ginger Mochi 🌶️", attributes: ["dessert", "spicy", "japanese"], dietary: ["vegetarian"] },
{ name: "Chili Chocolate Dorayaki 🌶️", attributes: ["dessert", "spicy", "japanese"], dietary: ["vegetarian"] },
{ name: "Spiced Matcha Cookies 🌶️", attributes: ["dessert", "spicy", "japanese"], dietary: ["vegetarian"] },

// Sour
{ name: "Yuzu Sorbet 🍋", attributes: ["dessert", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Plum Jelly 🍋", attributes: ["dessert", "sour", "japanese"], dietary: ["vegan", "gluten-free"] },
{ name: "Lemon Daifuku 🍋", attributes: ["dessert", "sour", "japanese"], dietary: ["vegetarian"] },

// Bitter
{ name: "Matcha Pudding ☕", attributes: ["dessert", "bitter", "japanese"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Green Tea Chocolate ☕", attributes: ["dessert", "bitter", "japanese"], dietary: ["vegetarian"] },
{ name: "Sencha Jelly ☕", attributes: ["dessert", "bitter", "japanese"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Gulab Jamun 🍬", attributes: ["dessert", "sweet", "indian"], dietary: ["vegetarian"] },
{ name: "Kheer 🍚", attributes: ["dessert", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Rasgulla 🍡", attributes: ["dessert", "sweet", "indian"], dietary: ["vegetarian", "gluten-free"] },

// Spicy
{ name: "Cardamom Chocolate Burfi 🌶️", attributes: ["dessert", "spicy", "indian"], dietary: ["vegetarian"] },
{ name: "Ginger Halwa 🌶️", attributes: ["dessert", "spicy", "indian"], dietary: ["vegetarian"] },
{ name: "Spiced Coconut Ladoo 🌶️", attributes: ["dessert", "spicy", "indian"], dietary: ["vegetarian", "gluten-free"] },

// Sour
{ name: "Tamarind Chutney Candy 🍋", attributes: ["dessert", "sour", "indian"], dietary: ["vegan", "gluten-free"] },
{ name: "Lemon Rasgulla 🍋", attributes: ["dessert", "sour", "indian"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Aam Panna Sorbet 🍋", attributes: ["dessert", "sour", "indian"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Chicory Coffee Fudge ☕", attributes: ["dessert", "bitter", "indian"], dietary: ["vegetarian"] },
{ name: "Coffee Burfi ☕", attributes: ["dessert", "bitter", "indian"], dietary: ["vegetarian"] },
{ name: "Cocoa Chikki ☕", attributes: ["dessert", "bitter", "indian"], dietary: ["vegetarian", "gluten-free"] },
// Sweet
{ name: "Mango Sticky Rice 🥭", attributes: ["dessert", "sweet", "thai"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Coconut Tapioca Pudding 🥥", attributes: ["dessert", "sweet", "thai"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Banana in Coconut Milk 🍌", attributes: ["dessert", "sweet", "thai"], dietary: ["vegetarian", "gluten-free"] },

// Spicy
{ name: "Chili Chocolate Tapioca 🌶️", attributes: ["dessert", "spicy", "thai"], dietary: ["vegetarian"] },
{ name: "Ginger Coconut Balls 🌶️", attributes: ["dessert", "spicy", "thai"], dietary: ["vegetarian"] },
{ name: "Spiced Mango Sorbet 🌶️", attributes: ["dessert", "spicy", "thai"], dietary: ["vegan", "gluten-free"] },

// Sour
{ name: "Lime Sorbet 🍋", attributes: ["dessert", "sour", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Tamarind Candy 🍋", attributes: ["dessert", "sour", "thai"], dietary: ["vegan", "gluten-free"] },
{ name: "Sour Mango Salad 🍋", attributes: ["dessert", "sour", "thai"], dietary: ["vegan", "gluten-free"] },

// Bitter
{ name: "Thai Coffee Jelly ☕", attributes: ["dessert", "bitter", "thai"], dietary: ["vegetarian"] },
{ name: "Dark Cocoa Tapioca ☕", attributes: ["dessert", "bitter", "thai"], dietary: ["vegetarian"] },
{ name: "Matcha Thai Tea Jelly ☕", attributes: ["dessert", "bitter", "thai"], dietary: ["vegetarian"] },
// Sweet
{ name: "Baklava 🥮", attributes: ["dessert", "sweet", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Halva 🌰", attributes: ["dessert", "sweet", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Kataifi 🥮", attributes: ["dessert", "sweet", "mediterranean"], dietary: ["vegetarian"] },

// Spicy
{ name: "Spiced Orange Almond Cake 🌶️", attributes: ["dessert", "spicy", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Cardamom Baklava 🌶️", attributes: ["dessert", "spicy", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Cinnamon Halva 🌶️", attributes: ["dessert", "spicy", "mediterranean"], dietary: ["vegetarian"] },

// Sour
{ name: "Lemon Olive Oil Cake 🍋", attributes: ["dessert", "sour", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Sour Cherry Tarts 🍋", attributes: ["dessert", "sour", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Yogurt Lemon Mousse 🍋", attributes: ["dessert", "sour", "mediterranean"], dietary: ["vegetarian", "gluten-free"] },

// Bitter
{ name: "Dark Chocolate Olive Oil Cake ☕", attributes: ["dessert", "bitter", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Coffee Almond Cake ☕", attributes: ["dessert", "bitter", "mediterranean"], dietary: ["vegetarian"] },
{ name: "Chocolate Tahini Mousse ☕", attributes: ["dessert", "bitter", "mediterranean"], dietary: ["vegetarian", "gluten-free"] },

// Sweet
{ name: "Patbingsu 🍧", attributes: ["dessert", "sweet", "korean"], dietary: ["vegetarian"] },
{ name: "Hotteok 🥞", attributes: ["dessert", "sweet", "korean"], dietary: ["vegetarian"] },
{ name: "Yakgwa 🍯", attributes: ["dessert", "sweet", "korean"], dietary: ["vegetarian"] },

// Spicy
{ name: "Ginger Cinnamon Rice Cake 🌶️", attributes: ["dessert", "spicy", "korean"], dietary: ["vegetarian"] },
{ name: "Chili Chocolate Hotteok 🌶️", attributes: ["dessert", "spicy", "korean"], dietary: ["vegetarian"] },
{ name: "Spiced Sweet Rice Balls 🌶️", attributes: ["dessert", "spicy", "korean"], dietary: ["vegetarian", "gluten-free"] },

// Sour
{ name: "Yuja Sorbet 🍋", attributes: ["dessert", "sour", "korean"], dietary: ["vegan", "gluten-free"] },
{ name: "Sour Plum Rice Cake 🍋", attributes: ["dessert", "sour", "korean"], dietary: ["vegetarian"] },
{ name: "Lemon Sweet Rice Balls 🍋", attributes: ["dessert", "sour", "korean"], dietary: ["vegetarian"] },

// Bitter
{ name: "Green Tea Rice Cake ☕", attributes: ["dessert", "bitter", "korean"], dietary: ["vegetarian", "gluten-free"] },
{ name: "Dark Chocolate Yakgwa ☕", attributes: ["dessert", "bitter", "korean"], dietary: ["vegetarian"] },
{ name: "Roasted Barley Tea Jelly ☕", attributes: ["dessert", "bitter", "korean"], dietary: ["vegan", "gluten-free"] },

// Sweet
{ name: "Che Ba Mau 🍨", attributes: ["dessert", "sweet", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Banh Flan 🥛", attributes: ["dessert", "sweet", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Coconut Sticky Rice 🥥", attributes: ["dessert", "sweet", "vietnamese"], dietary: ["vegetarian", "gluten-free"] },

// Spicy
{ name: "Ginger Rice Cake 🌶️", attributes: ["dessert", "spicy", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Spiced Coconut Balls 🌶️", attributes: ["dessert", "spicy", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Chili Chocolate Flan 🌶️", attributes: ["dessert", "spicy", "vietnamese"], dietary: ["vegetarian"] },

// Sour
{ name: "Tamarind Sorbet 🍋", attributes: ["dessert", "sour", "vietnamese"], dietary: ["vegan", "gluten-free"] },
{ name: "Lime Jelly 🍋", attributes: ["dessert", "sour", "vietnamese"], dietary: ["vegan", "gluten-free"] },
{ name: "Passionfruit Pudding 🍋", attributes: ["dessert", "sour", "vietnamese"], dietary: ["vegetarian", "gluten-free"] },

// Bitter
{ name: "Coffee Jelly ☕", attributes: ["dessert", "bitter", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Cacao Tapioca ☕", attributes: ["dessert", "bitter", "vietnamese"], dietary: ["vegetarian"] },
{ name: "Dark Chocolate Flan ☕", attributes: ["dessert", "bitter", "vietnamese"], dietary: ["vegetarian"] },

// Sweet
{ name: "Basbousa 🍰", attributes: ["dessert", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Maamoul 🍪", attributes: ["dessert", "sweet", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Kanafeh 🧀", attributes: ["dessert", "sweet", "middle-eastern"], dietary: ["vegetarian"] },

// Spicy
{ name: "Cardamom Date Cake 🌶️", attributes: ["dessert", "spicy", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Ginger Baklava 🌶️", attributes: ["dessert", "spicy", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Spiced Halva 🌶️", attributes: ["dessert", "spicy", "middle-eastern"], dietary: ["vegetarian"] },

// Sour
{ name: "Lemon Poppy Seed Cake 🍋", attributes: ["dessert", "sour", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Sour Cherry Maamoul 🍋", attributes: ["dessert", "sour", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Yogurt Lemon Pudding 🍋", attributes: ["dessert", "sour", "middle-eastern"], dietary: ["vegetarian", "gluten-free"] },

// Bitter
{ name: "Dark Chocolate Baklava ☕", attributes: ["dessert", "bitter", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Coffee Maamoul ☕", attributes: ["dessert", "bitter", "middle-eastern"], dietary: ["vegetarian"] },
{ name: "Chocolate Tahini Pudding ☕", attributes: ["dessert", "bitter", "middle-eastern"], dietary: ["vegetarian", "gluten-free"] },
];
