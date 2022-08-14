//import fetch
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

//create empty array of champion objects
const championObjects = []

//fetch array of versions
fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then(res => res.json())
    .then(json => {
        //fetch simple champion info json using newest version
        fetch(`https://ddragon.leagueoflegends.com/cdn/${json[0]}/data/en_US/champion.json`, {method: "Get"})
        .then(res => res.json())
        .then(json => {
            //order list of keys based on object's name property and assign each object to the empty array
            Object.keys(json.data).sort((a, b) => json.data[a].name > json.data[b].name ? 1 : -1).forEach(champ => {
                championObjects.push(json.data[champ]);
            })
        })
    })

//export champion array of champion objects
module.exports = championObjects;
