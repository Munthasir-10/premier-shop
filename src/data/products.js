const products = [
  // Beers
  { id: 1, name: "Heineken", category: "Beer", price: 1.80, description: "Classic lager 330ml" },
  { id: 2, name: "Stella Artois", category: "Beer", price: 1.90, description: "Premium lager 330ml" },
  { id: 3, name: "Guinness", category: "Beer", price: 2.10, description: "Irish stout 440ml" },
  { id: 4, name: "Corona Extra", category: "Beer", price: 1.95, description: "Mexican lager 330ml" },
  { id: 5, name: "Fosters", category: "Beer", price: 1.60, description: "Australian lager 440ml" },
  { id: 6, name: "Peroni", category: "Beer", price: 2.20, description: "Italian lager 330ml" },

  // Wines
  { id: 7, name: "Barefoot Pinot Grigio", category: "Wine", price: 7.99, description: "Crisp white wine 75cl" },
  { id: 8, name: "Hardy's Cabernet Sauvignon", category: "Wine", price: 6.99, description: "Rich red wine 75cl" },
  { id: 9, name: "Echo Falls Rose", category: "Wine", price: 5.99, description: "Light rose wine 75cl" },
  { id: 10, name: "Lambrini", category: "Wine", price: 3.50, description: "Sparkling perry 75cl" },

  // Spirits
  { id: 11, name: "Jack Daniels", category: "Spirits", price: 22.00, description: "Tennessee whiskey 70cl" },
  { id: 12, name: "Smirnoff Vodka", category: "Spirits", price: 16.00, description: "Classic vodka 70cl" },
  { id: 13, name: "Bacardi Rum", category: "Spirits", price: 15.00, description: "White rum 70cl" },
  { id: 14, name: "Gordon's Gin", category: "Spirits", price: 17.00, description: "London dry gin 70cl" },
  { id: 15, name: "Jameson Whiskey", category: "Spirits", price: 20.00, description: "Irish whiskey 70cl" },

  // Chocolates
  { id: 16, name: "Cadbury Dairy Milk", category: "Chocolates", price: 1.50, description: "Milk chocolate bar 200g" },
  { id: 17, name: "Toblerone", category: "Chocolates", price: 2.50, description: "Swiss milk chocolate 150g" },
  { id: 18, name: "Ferrero Rocher", category: "Chocolates", price: 4.99, description: "Hazelnut chocolates 16 pack" },
  { id: 19, name: "Lindt Excellence", category: "Chocolates", price: 2.99, description: "Dark chocolate 70% 100g" },
  { id: 20, name: "KitKat Chunky", category: "Chocolates", price: 0.99, description: "Chocolate wafer bar" },

  // Biscuits
  { id: 21, name: "McVities Digestives", category: "Biscuits", price: 1.20, description: "Classic digestive biscuits 400g" },
  { id: 22, name: "Hobnobs", category: "Biscuits", price: 1.30, description: "Oat biscuits 300g" },
  { id: 23, name: "Bourbon Creams", category: "Biscuits", price: 0.89, description: "Chocolate cream biscuits 300g" },
  { id: 24, name: "Jaffa Cakes", category: "Biscuits", price: 1.10, description: "Orange jaffa cakes 12 pack" },

  // Energy Drinks
  { id: 25, name: "Red Bull", category: "Energy Drinks", price: 1.80, description: "Energy drink 250ml" },
  { id: 26, name: "Monster Energy", category: "Energy Drinks", price: 1.70, description: "Energy drink 500ml" },
  { id: 27, name: "Lucozade Energy", category: "Energy Drinks", price: 1.30, description: "Energy drink 500ml" },
  { id: 28, name: "Rockstar Energy", category: "Energy Drinks", price: 1.60, description: "Energy drink 500ml" },

  // Soft Drinks
  { id: 29, name: "Coca Cola", category: "Soft Drinks", price: 1.20, description: "Classic cola 500ml" },
  { id: 30, name: "Pepsi", category: "Soft Drinks", price: 1.10, description: "Cola drink 500ml" },
  { id: 31, name: "Fanta Orange", category: "Soft Drinks", price: 1.10, description: "Orange fizzy drink 500ml" },
  { id: 32, name: "Sprite", category: "Soft Drinks", price: 1.10, description: "Lemon lime drink 500ml" },
  { id: 33, name: "Ribena", category: "Soft Drinks", price: 0.99, description: "Blackcurrant drink 500ml" },

  // Crisps & Snacks
  { id: 34, name: "Walkers Ready Salted", category: "Crisps & Snacks", price: 0.89, description: "Classic crisps 150g" },
  { id: 35, name: "Pringles Original", category: "Crisps & Snacks", price: 2.50, description: "Stackable crisps 200g" },
  { id: 36, name: "Doritos Chilli Heatwave", category: "Crisps & Snacks", price: 1.20, description: "Tortilla chips 150g" },
  { id: 37, name: "Pot Noodle", category: "Crisps & Snacks", price: 1.10, description: "Instant noodles chicken flavour" },

  // Tobacco & Accessories
  { id: 38, name: "Clipper Lighter", category: "Accessories", price: 1.50, description: "Refillable lighter" },
  { id: 39, name: "Rizla Papers", category: "Accessories", price: 0.75, description: "Rolling papers green" },

  // Household
  { id: 40, name: "Andrex Toilet Roll", category: "Household", price: 3.50, description: "4 pack toilet rolls" },
  { id: 41, name: "Fairy Liquid", category: "Household", price: 1.80, description: "Washing up liquid 500ml" },
  { id: 42, name: "Rizla King Size", category: "Accessories", price: 0.99, description: "King size rolling papers" },

  // Juices
  { id: 43, name: "Tropicana Orange", category: "Juices", price: 2.50, description: "Fresh orange juice 850ml" },
  { id: 44, name: "Innocent Smoothie", category: "Juices", price: 2.99, description: "Mixed berry smoothie 750ml" },
  { id: 45, name: "Apple Juice", category: "Juices", price: 1.50, description: "Pure apple juice 1L" },

  // Water
  { id: 46, name: "Evian Still Water", category: "Water", price: 0.99, description: "Natural mineral water 500ml" },
  { id: 47, name: "Buxton Sparkling", category: "Water", price: 0.99, description: "Sparkling water 500ml" },

  // Ice Cream
  { id: 48, name: "Magnum Classic", category: "Ice Cream", price: 1.80, description: "Vanilla ice cream bar" },
  { id: 49, name: "Cornetto", category: "Ice Cream", price: 1.50, description: "Vanilla cone with chocolate" },
  { id: 50, name: "Ben & Jerry's", category: "Ice Cream", price: 5.99, description: "Cookie dough ice cream 500ml" },
]

export default products