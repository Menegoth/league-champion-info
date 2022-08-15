//dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const gameVersion = require("./game-version");

//async function to get simple champion data
async function GetChampionsArray() {

    //get most recent game version
    const version = await gameVersion.GetGameVersion();
    //fetch object of simple champion data
    const res = await (await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)).json();

    //map res.data keys array to champion objects array to create an array for each champion
    const championObjects = Object.keys(res.data).map(key => {
        return res.data[key];
    });

    //order champions alphabetically based on name instead of id
    championObjects.sort((a, b) => a.name > b.name ? 1 : -1);

    //return array
    return championObjects;

}

module.exports.GetChampionsArray = GetChampionsArray;