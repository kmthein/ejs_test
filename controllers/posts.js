const posts = [];

const Post = require("../models/posts");

exports.createPost = (req, res) => {
  const { title, description, img } = req.body;
  // posts.push({
  //   id: Math.random() * 100,
  //   title,
  //   description,
  //   img
  // });
  // console.log(`Title is ${title} and description is ${description}.`);
  const post = new Post(title, description, img);
  post.addNewPost().then(() => {
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
  Post.getAllPosts().then(([rows]) => {
    console.log(rows);
    res.render("home", { title: "Home", posts: rows });
  }).catch((err) => {
    console.log(err);
  });
  // res.sendFile('./views/homepage.html', { root: __dirname });
  // res.sendFile(path.join(__dirname, "..", "views", "homepage.html"));
};

exports.getPost = (req, res) => {
  const postId = Number(req.params.postId);
  // const post = posts.find((post) => post.id == postId);
  Post.getPost(postId).then(([row]) => {
    console.log(row);
    res.render("details", { title: "Post Detail", post: row[0] });
  }).catch((err) => {
    console.log(err);
  });
};
