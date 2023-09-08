const express = require("express");

const router = express.Router();

const path = require("path");

const postsController = require("../controllers/posts");

router.get('/create-post', postsController.renderCreatePost);

router.post('/', postsController.createPost);

module.exports = router;