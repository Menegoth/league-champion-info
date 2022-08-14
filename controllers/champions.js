const router = require("express").Router();
const champions = require("../models/champion-simple.js");



//GET /champions
router.get("/", (req, res) => {
    res.status(303).render("champions/index", { champions: champions })
});

module.exports = router;