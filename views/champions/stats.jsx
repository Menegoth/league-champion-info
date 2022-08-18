const React = require("react");

function Stats({ classes, stats, info }) {

    //get classes
    const classesFormatted = classes.map(classType => {
        return (
            <h3 className="text-white text-opacity-75 d-inline-block me-2" key={classType}>{classType}</h3>
        )
    })

    return (
        <div className="mt-2">
            <hr className="text-muted"/>
            {classesFormatted}
            <div className="text-center row border border-3 rounded-3 border-secondary">
                <div className="col my-3">
                    <h5 className="text-white text-decoration-underline mb-3">Stats</h5>
                    <p className=" text-white"><i className="bi bi-heart text-danger"/> Health: <b>{stats.hp}</b></p>
                    <p className="text-white"><i className="bi bi-shield text-warning"/> Armor: <b>{stats.armor}</b></p>
                    <p className="text-white"><i className="bi bi-record-circle text-primary"/> Magic Resist: <b>{stats.spellblock}</b></p>
                    <p className="text-white"><i className="bi bi-exclamation-triangle text-success"/> Attack Damage: <b>{stats.attackdamage}</b></p>
                </div>
                <div className="col my-3">
                    <h5 className="text-white text-decoration-underline mb-3">Ratings</h5>
                    <p className="text-white">Difficulty: <b>{info.difficulty}</b></p>
                    <p className="text-white">Attack: <b>{info.attack}</b></p>
                    <p className="text-white">Abilities: <b>{info.magic}</b></p>
                    <p className="text-white">Defense: <b>{info.defense}</b></p>
                </div>
            </div>
        </div>
    )

}

module.exports = Stats;