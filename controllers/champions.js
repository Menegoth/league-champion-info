const router = require("express").Router();
const championsSimple = require("../models/champion-simple");

//GET /champions
router.get("/", (req, res) => {
    //wait for champions array fetch then load page passing array as data
    championsSimple.GetChampionsArray().then(champions => res.status(303).render("champions/index", 
        { 
            champions: champions, 
            title: "Champions" 
        }
    ));
});

module.exports = router;