import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import PlayerContainer from './components/PlayerContainer'
import TeamOneContainer from './components/TeamOneContainer'
import TeamTwoContainer from './components/TeamTwoContainer'
import TeamContainer from './components/TeamContainer';

const myAPI = 'http://localhost:9292'

function App() {

  const [players, setPlayers] = useState([])

  const [teamOne, setTeamOne] = useState([])
  const [teamTwo, setTeamTwo] = useState([])

  const [teams, setTeams] = useState([])

  function addToTeamOne(playerToAdd) {
    setTeamOne(([...teamOne, playerToAdd]))
    console.log(teamOne)
  }

  function addToTeamTwo(playerToAdd) {
    setTeamTwo(([...teamTwo, playerToAdd]))
    console.log(teamTwo)
  }

  function handleSubmit([arr1, arr2]) {
    fetch(myAPI, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-type": "application/json"
      },
      body: JSON.stringify([arr1, arr2]),
    })
    .then(res => res.json())
    .then(([arr1, arr2]) => setTeams([...teams, [arr1, arr2]]))
  }

  useEffect(() =>
    fetch(`${myAPI}/players`)
      .then(res => res.json())
      .then(data => setPlayers(data)),
    [])



  return (
    <div className="App">
      <h1> The Flatiron Grid-Iron</h1>
      <TeamContainer teamOne={teamOne} teamTwo={teamTwo} />
      <h2>Draftable Players:</h2>
      <div className="Player-Container">
        <PlayerContainer players={players} addToTeamOne={addToTeamOne} addToTeamTwo={addToTeamTwo} />
      </div>
    </div>
  );
}

export default App;
