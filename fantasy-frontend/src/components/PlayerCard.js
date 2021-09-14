export default function PlayerCard({ player }){
    return (
        <div className='player-card'>
            <div key={player.id}>
                <img src={player.image_url}/>
                <h5> Name: {player.name} </h5>
            </div>

        </div>
    )
}