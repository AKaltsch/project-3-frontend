import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import PlayerContainer from './components/PlayerContainer'

const myAPI = 'http://localhost:9292'

function App() {

  const [players, setPlayers] = useState([])

  useEffect(() => 
  fetch(`${myAPI}/players`)
  .then(res => res.json())
  .then(data => setPlayers(data)), [])



  return (
    <div className="App">
      <div className="Player-Container">
        <PlayerContainer  players={players} />
      </div>
    </div>
  );
}

export default App;
