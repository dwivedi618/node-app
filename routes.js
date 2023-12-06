// routes.js
const express = require("express");
const router = express.Router();
const { getDb } = require("./db"); // Import getDb function from db.js

router.post("/posts", async (req, res) => {
  try {
    // Assuming you have a collection named 'posts'
    const db = getDb(); // Use the getDb function to retrieve the database connection
    const collection = db.collection("posts");

    // Data to be inserted, assuming the request body has a 'title' field
    const postData = {
      title: req.body.title,
      // Add other fields as needed
    };

    // Insert data into the 'posts' collection
    const result = await collection.insertOne(postData);

    res
      .status(201)
      .json({ message: "Post added successfully", postId: result.insertedId });
  } catch (error) {
    console.error("Error adding post:", error);
    res.status(500).json({ message: "Failed to add post" });
  }
});

router.get("/posts", async (req, res) => {
  try {
    // Assuming you have a collection named 'posts'
    const db = getDb(); // Use the getDb function to retrieve the database connection

    const collection = db.collection("posts");

    // Fetch all posts
    const posts = await collection.find().toArray();

    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Failed to fetch posts" });
  } 
});

module.exports = router;
