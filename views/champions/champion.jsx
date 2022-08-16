//dependencies
const React = require("react");
const Default = require("../default");

function champion({ champion }) {

    return (
        <Default title={champion.name}>
            <main>
                <h1>{champion.name}</h1>
            </main>
        </Default>
    )
}

//name & title
//splash art
//lore
//radio buttons with ability icons names + desc
//skins + name

//export
module.exports = champion;