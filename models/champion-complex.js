//dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const gameVersion = require("./game-version")

//async function to fetch specific champion data
async function GetChampionComplex(champion) {

    //get most recent game version
    const version = await gameVersion.GetGameVersion();
    //get champion info based on game version and id
    const res = await (await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${champion}.json`, {method: "Get"})).json();

    //assign all keys and values of champion object to their own object
    let championData = {};
    Object.keys(Object.values(res.data)[0]).forEach(key => {
        championData[key] = Object.values(res.data)[0][key];
    });

    //use regex to remove tags in spell descriptions
    championData.spells.forEach(spell => {
        spell.description = spell.description.replace(/\s*\<.*?\>\s*/g, ' ')
    })
    
    //return object of champion data
    return championData;
    
}

//export
module.exports.GetChampionComplex = GetChampionComplex;
