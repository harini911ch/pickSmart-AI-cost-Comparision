const foodData = {
  biryani: [
    { name: 'Paradise Biryani',         emoji: '🍚', rating: 4.6, cuisine: 'Hyderabadi',   swiggy: { price: 349, time: 35 }, zomato: { price: 299, time: 28 } },
    { name: 'Bawarchi Restaurant',      emoji: '🫕', rating: 4.4, cuisine: 'Biryani',       swiggy: { price: 279, time: 40 }, zomato: { price: 310, time: 32 } },
    { name: 'Shah Ghouse Cafe',         emoji: '🍛', rating: 4.5, cuisine: 'Mughlai',       swiggy: { price: 320, time: 38 }, zomato: { price: 299, time: 30 } },
    { name: 'Café Bahar',               emoji: '🥘', rating: 4.3, cuisine: 'Biryani',       swiggy: { price: 260, time: 45 }, zomato: { price: 249, time: 35 } },
  ],
  pizza: [
    { name: "Domino's Pizza",           emoji: '🍕', rating: 4.2, cuisine: 'Italian',       swiggy: { price: 449, time: 30 }, zomato: { price: 399, time: 25 } },
    { name: 'Pizza Hut',                emoji: '🫓', rating: 4.0, cuisine: 'Italian',       swiggy: { price: 499, time: 40 }, zomato: { price: 469, time: 35 } },
    { name: "La Pino'z Pizza",          emoji: '🍕', rating: 4.3, cuisine: 'Pizza',         swiggy: { price: 349, time: 35 }, zomato: { price: 329, time: 28 } },
  ],
  burger: [
    { name: "McDonald's",               emoji: '🍔', rating: 4.1, cuisine: 'Fast Food',     swiggy: { price: 199, time: 25 }, zomato: { price: 189, time: 20 } },
    { name: 'Burger King',              emoji: '👑', rating: 4.0, cuisine: 'Fast Food',     swiggy: { price: 229, time: 28 }, zomato: { price: 219, time: 22 } },
    { name: 'Wow! Burger',              emoji: '🍟', rating: 4.2, cuisine: 'Burgers',       swiggy: { price: 179, time: 22 }, zomato: { price: 199, time: 30 } },
  ],
  idli: [
    { name: 'Udupi Grand',              emoji: '🥣', rating: 4.5, cuisine: 'South Indian',  swiggy: { price: 89,  time: 20 }, zomato: { price: 79,  time: 18 } },
    { name: 'A2B (Adyar Ananda Bhavan)',emoji: '🍽️', rating: 4.4, cuisine: 'South Indian',  swiggy: { price: 99,  time: 25 }, zomato: { price: 89,  time: 22 } },
  ],
  dosa: [
    { name: 'MTR Restaurant',           emoji: '🫓', rating: 4.7, cuisine: 'South Indian',  swiggy: { price: 120, time: 28 }, zomato: { price: 109, time: 22 } },
    { name: 'Chutneys',                 emoji: '🍽️', rating: 4.5, cuisine: 'South Indian',  swiggy: { price: 135, time: 32 }, zomato: { price: 125, time: 25 } },
    { name: 'Udupi Grand',              emoji: '🥣', rating: 4.3, cuisine: 'South Indian',  swiggy: { price: 99,  time: 25 }, zomato: { price: 109, time: 20 } },
  ],
  rolls: [
    { name: 'Kathi Junction',           emoji: '🌯', rating: 4.2, cuisine: 'North Indian',  swiggy: { price: 149, time: 22 }, zomato: { price: 139, time: 18 } },
    { name: "Wrap 'n' Roll",            emoji: '🫔', rating: 4.1, cuisine: 'Rolls',         swiggy: { price: 169, time: 28 }, zomato: { price: 155, time: 24 } },
  ],
  pasta: [
    { name: 'Faasos',                   emoji: '🍝', rating: 4.1, cuisine: 'Italian',       swiggy: { price: 249, time: 30 }, zomato: { price: 229, time: 25 } },
    { name: 'Oven Story',               emoji: '🫕', rating: 4.3, cuisine: 'Italian',       swiggy: { price: 299, time: 35 }, zomato: { price: 279, time: 28 } },
  ],
  noodles: [
    { name: 'Wow! Momo',                emoji: '🍜', rating: 4.2, cuisine: 'Chinese',       swiggy: { price: 179, time: 25 }, zomato: { price: 169, time: 20 } },
    { name: 'Chings Secret',            emoji: '🥡', rating: 4.0, cuisine: 'Indo-Chinese',  swiggy: { price: 149, time: 22 }, zomato: { price: 159, time: 28 } },
  ],
};

module.exports = foodData;