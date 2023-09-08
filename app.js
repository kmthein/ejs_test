const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const sequelize = require("./utils/database");

const app = express();

const postRoutes = require("./routes/post");

const adminRoutes = require("./routes/admin");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded( {extended: false} ));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    console.log("I'm home middleware.");
    next();
})

app.use('/admin', (req, res, next) => {
    console.log("Admin middleware approved.");
    next();
})

app.use(postRoutes);

app.use('/admin', adminRoutes);

sequelize.sync().then((result) => {
    app.listen("8080");  
}).catch((err) => {
    console.log(err);
});
