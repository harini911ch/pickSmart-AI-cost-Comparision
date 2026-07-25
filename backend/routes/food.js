const express = require('express');
const router = express.Router();
const foodData = require('../data/foodData');

// GET /api/food?item=biryani&sort=price
router.get('/', (req, res) => {
  const { item = '', sort = 'price' } = req.query;

  if (!item) {
    return res.status(400).json({ error: 'Please provide a food item to search.' });
  }

  const query = item.toLowerCase();

  // Find matching key in foodData
  const matchedKey = Object.keys(foodData).find(
    key => query.includes(key) || key.includes(query)
  );

  if (!matchedKey) {
    return res.status(404).json({ error: `No restaurants found for "${item}". Try: biryani, pizza, burger, dosa, idli, rolls, pasta, noodles.` });
  }

  let restaurants = [...foodData[matchedKey]];

  // Sort
  if (sort === 'price') {
    restaurants.sort((a, b) =>
      Math.min(a.swiggy.price, a.zomato.price) - Math.min(b.swiggy.price, b.zomato.price)
    );
  } else if (sort === 'time') {
    restaurants.sort((a, b) =>
      Math.min(a.swiggy.time, a.zomato.time) - Math.min(b.swiggy.time, b.zomato.time)
    );
  } else if (sort === 'rating') {
    restaurants.sort((a, b) => b.rating - a.rating);
  }

  // Add winner info
  restaurants = restaurants.map(r => {
    const swiggyScore = r.swiggy.price * 0.6 + r.swiggy.time * 2;
    const zomatoScore = r.zomato.price * 0.6 + r.zomato.time * 2;
    return {
      ...r,
      winner: swiggyScore <= zomatoScore ? 'swiggy' : 'zomato',
    };
  });

  res.json({
    searchItem: item,
    matchedCategory: matchedKey,
    totalResults: restaurants.length,
    restaurants,
  });
});

module.exports = router;