import { useState } from 'react'

export default function PlayerCard({ player }) {

    const [oneDraft, setOneDraft] = useState(false)
    const [twoDraft, setTwoDraft] = useState(false)

    function handleOneDraft() {
        return setOneDraft(!oneDraft)
    }

    function handleTwoDraft() {
        return setTwoDraft(!twoDraft)
    }


    if (oneDraft === false && twoDraft === false)
        return (<div className='player-card'>
            <div key={player.id}>
                <h3> Name: {player.name} </h3>
                <img src={player.image_url} />
                <h4> Rating: {player.rating} </h4>
                <h5>Draft to:</h5>
                <span>
                    <button className="team1Button" onClick={handleOneDraft}>Team 1</button>
                    <button className="team2Button" onClick={handleTwoDraft}>Team 2</button>
                </span>
            </div>
        </div>)
    else {
        return ""
    }

}