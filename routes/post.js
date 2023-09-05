const express = require("express");

const router = express.Router();

const path = require("path");

const { posts } = require("./admin");

router.get("/", (req, res) => {
  console.log(posts);
  // res.sendFile('./views/homepage.html', { root: __dirname });
  // res.sendFile(path.join(__dirname, "..", "views", "homepage.html"));
  res.render("home", { title: "Home", posts });
});

router.get("/post", (req, res) => {
  // res.send("<h1>I'm post page.</h1>")
  res.sendFile(path.join(__dirname, "..", "views", "postpage.html"));
});

module.exports = router;
