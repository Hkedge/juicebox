const express = require('express');
const postsRouter = express.Router();
const { getAllUsers, getAllPosts } = require('../db');

postsRouter.use((req, res, next) => {
  console.log("A request is being made to /posts");

  next();
});

postsRouter.get('/', async (req, res) => {

  const posts = await getAllPosts();

  res.send({
    posts
  });
});


module.exports = postsRouter;