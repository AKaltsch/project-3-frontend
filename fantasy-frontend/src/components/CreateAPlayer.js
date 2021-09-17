import {useState} from "react"

import TeamCard from './TeamCard'

export default function CreateAPlayer({handleSubmit}) {

    const [image_url, setImageURL] = useState('')
    const [name, setName] = useState('')
    const [rating, setRating] = useState('')

    function onSubmit(e) {
        e.preventDefault()

        const newPlayer = {
            name, image_url, rating
        }

        handleSubmit(newPlayer)
        setImageURL('')
        setName('')
        setRating('')
    }

    return (
        <div className='createContainer'>
            <h2>Create a Player</h2>
            
            <form className='playerForm' onSubmit={onSubmit}>
                
                <input 
                    type='text'
                    placeholder='Enter player name...' 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                />
                <br />
                <input 
                    type='text'
                    placeholder='Enter image URL...' 
                    value={image_url}
                    onChange={(e) => setImageURL(e.target.value)} 
                />
                <br />
                <input 
                    type='text'
                    placeholder='Enter player rating(1-10)' 
                    value={rating}
                    onChange={(e) => setRating(e.target.value)} 
                />
                <br />
                <button type='submit' className="submitButton">Create Player</button>
            </form>
        </div>
    )
}