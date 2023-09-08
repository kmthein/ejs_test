const posts = [];

const Post = require("../models/posts");

exports.createPost = (req, res) => {
  const { title, description, img } = req.body;
  Post.create({
    title,
    description,
    image_url: img
  }).then((result) => {
    res.redirect("/");    
  }).catch((err) => {
    console.log(err);
  });
};

exports.renderCreatePost = (req, res) => {
  // res.sendFile(path.join(__dirname, "..", "views", "create-post.html"));
  res.render("addPost", { title: "Create Post" });
};

exports.getPosts = (req, res) => {
  Post.findAll().then((posts) => {
    console.log(posts);
    res.render("home", { title: "Home", posts });    
  }).catch((err) => {
    console.log(err);
  });
};

exports.getPost = (req, res) => {
  const postId = Number(req.params.postId);
  Post.findOne({ where: { id: postId }}).then((post) => {
    res.render("details", { title: "Post Detail", post });
  }).catch((err) => {
    console.log(err);
  });
};
