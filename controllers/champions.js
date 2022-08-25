const router = require("express").Router();
const championsSimple = require("../models/champion-simple");
const championsComplex = require("../models/champion-complex");

//GET /champions
router.get("/", async (req, res) => {
    //wait for champions array fetch then load page passing array as data
    try {
        const champions = await championsSimple.GetChampionsArray();
        res.status(303).render("champions/index", {
            champions: champions,
            title: "Champions"
        });
    } catch (err) {
        console.log("error:", err);
        //replace with error page
        res.send(`Error: ${err}`);
    }
});

//GET /champions/:champion
router.get("/:champion", async (req, res) => {
    //wait for champion complex object and load page passing it
    try {
        const champion = await championsComplex.GetChampionComplex(req.params.champion);
        res.status(303).render("champions/champion", {
            champion: champion,
            title: champion.name
        });
    } catch (err) {
        console.log("error:", err);
        //replace with error page
        res.send(`Error: ${err}`);
    }
});


//export
module.exports = router;