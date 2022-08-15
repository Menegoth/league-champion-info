//dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

//async function to fetch specific champion data
async function GetChampion(champion) {

    const res = await (await fetch(`https://ddragon.leagueoflegends.com/cdn/12.15.1/data/en_US/champion/${champion}.json`, {method: "Get"})).json()
    
    let championData = {};
    Object.keys(Object.values(res.data)[0]).forEach(key => {
        championData[key] = Object.values(res.data)[0][key];
    })
    
    return championData;
    
}
module.exports.GetChampion = GetChampion;
