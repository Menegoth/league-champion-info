//dependencies
const React = require("react");
const Default = require("../default");
const Stats = require("./stats");

function champion({ champion }) {

    return (
        <Default title={champion.name} color="bg-dark">
            <main>
                <a className="text-decoration-none bg-secondary text-white p-1 my-1 rounded-2" href="/champions"><i className="bi bi-arrow-left-circle"/> Back To Champions Page</a>
                <div className="text-center">
                    <h1 className="fs-1 fw-bold text-white text-opacity-75">{champion.name}, {champion.title}</h1>
                </div>
                <div className="text-center row w-100">
                    <img className="col rounded-4 d-inline-block w-75 ms-3" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`} alt={`${champion.name} full splash`}/>
                    <div className="col w-25 me-4 text-center d-inline-block">
                        <h3 className="text-white fw-light">{champion.lore}</h3>
                        <div className="row">
                            <Stats classes={champion.tags} stats={champion.stats} info={champion.info}></Stats>
                        </div>
                    </div>
                </div>
            </main>
        </Default>
    )
}

//radio buttons with ability icons names + desc
//skins + name

//export
module.exports = champion;