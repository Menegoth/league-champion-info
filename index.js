//dependencies
require("dotenv").config();
const express = require("express");
const app = express();

//express settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//router for /champions
app.use("/champions", require("./controllers/champions"));

//GET / and redirect to /home
app.get("/", (req, res) => {
    res.status(302).redirect("/home");
});

//GET /home
app.get("/home", (req, res) => {
    res.status(303).send("get /home stub");
})

//test

const champion = require("./models/champion-complex");
app.get("/test", (req, res) => {
    champion.GetChampion("Belveth").then(champ => res.send(champ))
})


//listen on designated port
app.listen(process.env.PORT, console.log("Listening on port", process.env.PORT));