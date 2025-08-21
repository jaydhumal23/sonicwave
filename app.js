const express = require("express");
const app = express();
// const PORT = 3001
const path = require("path")
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.redirect("/home")
})
app.get("/home", (req, res) => {
    res.render("index");

})

// app.listen(PORT, () => {
//     console.log("Your server is live at port : " + PORT);
// });


module.exports = app
