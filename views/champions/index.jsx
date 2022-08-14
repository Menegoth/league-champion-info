//dependencies
const React = require("react");
const Default = require("../default");

function index(data) {
    //format each champ object
    let championsFormatted = data.champions.map((champion) => {
        return (
                //set up each to have loading splash, name and title
                <div className="col text-center border m-1">
                <a className="text-decoration-none" href={`champions/${champion.id}`}>
                    <h1 className="text-black fw-bold">{champion.name}</h1>
                    <img className="" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}/>
                    <h4 className="text-muted fst-italic">{champion.title}</h4>
                </a>
                </div>
        )
    })

    return (
        <Default>
            <main>
                <div className="row w-75 m-auto">
                    {championsFormatted}
                </div>
            </main>
        </Default>
    )
}

//exports
module.exports = index;