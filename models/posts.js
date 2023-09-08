const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Post = sequelize.define("post", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image_url: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Post;