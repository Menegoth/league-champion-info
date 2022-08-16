const router = require("express").Router();
const championsSimple = require("../models/champion-simple");
const championsComplex = require("../models/champion-complex");

//GET /champions
router.get("/", (req, res) => {
    //wait for champions array fetch then load page passing array as data
    championsSimple.GetChampionsArray()
        .then(champions => res.status(303).render("champions/index", 
            { 
                champions: champions, 
                title: "Champions" 
            }
        ));
});

//GET /champions/:champion
router.get("/:champion", (req, res) => {
    championsComplex.GetChampionComplex(req.params.champion)
        .then(champion => res.status(303).render("champions/champion",
            {
                champion: champion
            }
        ));
});

//export
module.exports = router;