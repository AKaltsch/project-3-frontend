import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import PlayerContainer from './components/PlayerContainer'
import TeamOneContainer from './components/TeamOneContainer'
import TeamTwoContainer from './components/TeamTwoContainer'

const myAPI = 'http://localhost:9292'

function App() {

  const [players, setPlayers] = useState([])

  const [teamOne, setTeamOne] = useState([])
  const [teamTwo, setTeamTwo] = useState([])

  // function handleOneDraft() {
  //   console.log("team one")
  //   return setOneDraft(oneDraft = !oneDraft)
  // }

  function addToTeamOne(playerToAdd) {
    setTeamOne(([...teamOne, playerToAdd]))
    console.log(teamOne)
  }

  function addToTeamTwo(playerToAdd) {
    setTeamTwo(([...teamTwo, playerToAdd]))
    console.log(teamTwo)
  }

  useEffect(() =>
    fetch(`${myAPI}/players`)
      .then(res => res.json())
      .then(data => setPlayers(data)), [])



  return (
    <div className="App">
      <h1> The Flatiron Grid-Iron</h1>
      <h2>Team One</h2>
      <div className="Team1-Container">
        <TeamOneContainer players={teamOne}/>
      </div>
      <h2>Team Two</h2>
      <div>
        <TeamTwoContainer players={teamTwo}/>
      </div>
      <h2>Draftable Players:</h2>
      <div className="Player-Container">
        <PlayerContainer players={players} addToTeamOne={addToTeamOne} addToTeamTwo={addToTeamTwo} />
      </div>
    </div>
  );
}

export default App;
