import './App.css';
import { useState } from 'react';
import PlayerToggle from './components/PlayerToggle.jsx'

function App() {

  const [players, setPlayers] = useState(2);

  return (
    <div className="wrap">
      <h1>Wingspan score calculator</h1>
      <PlayerToggle players={players} setPlayers={setPlayers} />{players}
    </div>
  );
}

export default App;
