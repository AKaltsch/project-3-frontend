import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import PlayerContainer from './components/PlayerContainer'

const myAPI = 'http://localhost:9292'

function App() {

  const [players, setPlayers] = useState([])
  const [oneDraft, setOneDraft] = useState(false)
  const [twoDraft, setTwoDraft] = useState(false)

  function handleOneDraft() {
    return setOneDraft(!oneDraft)
  }

  function handleTwoDraft() {
    return setTwoDraft(!twoDraft)
  }

  useEffect(() =>
    fetch(`${myAPI}/players`)
      .then(res => res.json())
      .then(data => setPlayers(data)), [])



  return (
    <div className="App">
      <h1> The Flatiron Grid-Iron</h1>
      <div className="Player-Container">
        <PlayerContainer players={players} handleOneDraft={handleOneDraft} handleTwoDraft={handleTwoDraft} oneDraft={oneDraft} twoDraft={twoDraft}/>
      </div>
    </div>
  );
}

export default App;
