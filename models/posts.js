const db = require("../utils/database");

module.exports = class Post {
    constructor(title, description, image_url) {
        this.title = title;
        this.description = description;
        this.image_url = image_url;
    }
    addNewPost() {
        return db.execute("INSERT INTO post (title, description, image_url) VALUES (?, ?, ?)", [this.title, this.description, this.image_url]);
    }
    static getAllPosts() {
        return db.execute("SELECT * FROM post");
    }
    static getPost(id) {
        return db.execute("SELECT * FROM post WHERE id = (?)", [id]);
    }
}