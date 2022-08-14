//dependencies
require("dotenv").config();
const express = require("express");
const app = express();

//express settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.use("/champions", require("./controllers/champions"));

//GET /
app.get("/", (req, res) => {
    res.status(303).send("get / stub");
});


//listen on designated port
app.listen(process.env.PORT, console.log("Listening on port", process.env.PORT));