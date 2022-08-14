const newestVersion = require('./patch-versions');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const championObjects = []

fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    .then(res => res.json())
    .then(json => {
        fetch(`https://ddragon.leagueoflegends.com/cdn/${json[0]}/data/en_US/champion.json`, { method: "Get" })
            .then(res => res.json())
            .then(json => {
            //order keys by name value and push each object to the champion objects array
            Object.keys(json.data).sort((a, b) => json.data[a].name > json.data[b].name ? 1 : -1).forEach(champ => {
                championObjects.push(json.data[champ]);
            })
})
    })


module.exports = championObjects;