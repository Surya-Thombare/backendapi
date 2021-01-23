const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  _id: Number,
  title: {
    type: String,
    required: true,
    min: 10,
    max: 50,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    min: 30,
    max: 1500,
    trim: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Array,
    default: [],
  },
  views: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
