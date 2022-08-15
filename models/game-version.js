//dependencies
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

async function GetGameVersion() {

    const result = await fetch("https://ddragon.leagueoflegends.com/api/versions.json")

}