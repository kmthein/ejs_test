const express = require("express");

const router = express.Router();

const path = require("path");

const postsController = require("../controllers/posts");


router.get("/", postsController.getPosts);

router.get("/post/:postId", postsController.getPost);

module.exports = router;
