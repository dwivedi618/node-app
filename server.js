// server.js
const express = require('express');
const cors = require('cors') 
const app = express();
const routes = require('./routes');
const { connectToDatabase } = require('./db'); // Import connectToDatabase function from db.js

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(cors())

// Use the routes defined in routes.js
app.use('/api', routes);

const PORT = process.env.PORT || 4200;

connectToDatabase() // Initialize database connection when server starts
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });
