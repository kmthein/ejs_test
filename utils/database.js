const Sequelize = require("sequelize");

const sequelize = new Sequelize("blog-2", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;