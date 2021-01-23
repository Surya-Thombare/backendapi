const express = require("express");
const router = express();
const User = require("../../model/user");
const Joi = require('joi');

router.post("/RegisterUser", async (req, res) => {
  console.log(req.body);
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role ? req.body.role : "user",
  });
  await user.save();
  res.send(user);
});

function validateUser(data) {
  const schema = {
    username: Joi.string().min(3).max(18).required(),
    firstName: Joi.string().min(3).max(15).required(),
    lastName: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(20).required(),
    role: Joi.string(),
  };

  return Joi.validate(data, schema);
}

module.exports = router;
