const Blog = require("../model/blogPost");
const express = require("express");
const router = express();
const app = express();
const Joi = require("joi");

router.get('/posts', async (req,res) => {
 
  const blogs = await Blog.find()
  res.send(blogs)

})

app.post("/blog", async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const blog = new Blog({
    title: req.body.title,
    description: req.body.description,
    likes: req.body.likes ? req.body.likes : 0,
    comments: req.body.comments ? req.body.comments : 0,
    author: req.body.author,
    views: req.body.views ? req.body.views : 0,
    date: Date.now(),
    _id: req.body._id,
    category: req.body.category,
  });

  await blog.save();
  res.send(blog);
});

function validateBlog(data) {
  const schema = {
    title: Joi.string().min(10).max(50).required(),
    description: Joi.string().min(50).max(1500).required(),
    date: Joi.date(),
    category: Joi.string().required(),
    views: Joi.number(),
    likes: Joi.number(),
    comments: Joi.array(),
    author: Joi.string().required(),
    _id: Joi.number().required(),
  };

  return Joi.validate(data, schema);
}

module.exports = app;
