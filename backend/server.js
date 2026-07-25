const express = require('express');
const cors = require('cors');
const path = require('path');
const ridesRouter = require('./routes/rides');
const foodRouter = require('./routes/food');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

// API Routes
app.use('/api/rides', ridesRouter);
app.use('/api/food', foodRouter);

// Default route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ PickSmart server running at http://localhost:${PORT}`);
});