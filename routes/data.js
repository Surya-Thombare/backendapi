const express = require("express");
const router = express();
const mongoose = require('mongoose')
const Category = require('../model/category')


router.get('/category', async (req,res) => {
    const category = await Category.find()
    res.send(category)

})

router.post('/category', async (req,res) => {
    const category = new Category ({
        name: req.body.name
    })
    await category.save()
    res.send(category)
})

module.exports = router;