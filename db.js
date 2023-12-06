// db.js
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/node-app-db'; // Replace with your database URL

let _db;

async function connectToDatabase() {
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    _db = client.db(); // Set the global _db variable once connected
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

function getDb() {
  if (!_db) {
    throw new Error('Database not connected!');
  }
  return _db;
}

module.exports = {
  connectToDatabase,
  getDb,
};
