//dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

//async function to acquire version
async function GetGameVersion() {

    //returns array of game versions, first index is always most recent
    const result = await (await fetch("https://ddragon.leagueoflegends.com/api/versions.json")).json();
    return result[0];

}

//export
module.exports.GetGameVersion = GetGameVersion;