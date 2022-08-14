//import fetch
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

//create empty array of champion objects
const championObjects = []

//fetch external data
fetch("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion.json", { method: "Get" })
    .then(res => res.json())
    .then(json => {
        //order keys by name value and push each object to the champion objects array
        Object.keys(json.data).sort((a, b) => json.data[a].name > json.data[b].name ? 1 : -1).forEach(champ => {
            championObjects.push(json.data[champ]);
        })
})

//export champion array of champion objects
module.exports = championObjects;
