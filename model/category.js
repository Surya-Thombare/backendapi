const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    _id: {
        type: Number,
      },
    name: {
        type: String,
    }
  
});

module.exports = mongoose.model("Category", categorySchema);
