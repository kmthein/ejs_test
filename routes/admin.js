const express = require("express");

const router = express.Router();

const path = require("path");

let posts = [];

router.get('/create-post', (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "views", "create-post.html"));
    res.render("addPost", {title: "Create Post"});
})

router.post('/', (req, res) => {
    const {title, description} = req.body;
    posts.push({
        title,
        description
    })
    console.log(`Title is ${title} and description is ${description}.`);
    res.redirect("/");
})

module.exports = { adminRoutes: router, posts };