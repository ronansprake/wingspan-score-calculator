import { useState } from 'react';
import { useEffect } from 'react';
import './App.scss';
import PlayerCountDisplay from './components/PlayerCountDisplay.jsx';
import PlayerInitialsDisplay from './components/PlayerInitialsDisplay.jsx';
import ScoringRow from './components/ScoringRow.jsx';
import TotalsRow from './components/TotalsRow.jsx';
import FixedHeader from './components/FixedHeader.js';

function App() {

   useEffect(() => {
       FixedHeader();
   });

	const scoreRows = 9;
  const [currentPlayerCount, setCurrentPlayerCount] = useState(2);
  const [currentScores, setCurrentScores] = useState(Array.from({length: scoreRows},()=> Array.from({length: 5}, () => 0)));
  
  const changeScore = (row, player, val) => {
    const copy = [...currentScores];
    val = parseInt(val,10);
    if (val < 0 || !val) { val = 0 };
    copy[row-1][player-1] = val;
    setCurrentScores(copy);
  };

  const getTotalScoreByPlayer = (player) => {
  	let score = 0;
  	currentScores.map( (text) => { score += text[player] } );
    return score;
  };

  const resetScores = () => {
    setCurrentScores(Array.from({length: scoreRows},()=> Array.from({length: 5}, () => 0)));
  };

	return (
		<div className="wrap">
			<h1>Wingspan score calculator</h1>
			<PlayerCountDisplay currentPlayerCount={currentPlayerCount} setCurrentPlayerCount={setCurrentPlayerCount} resetScores={resetScores} />
			<PlayerInitialsDisplay currentPlayerCount={currentPlayerCount} />
			<div className="player-a">
	      <h2 className="group-label">Automa (x3/4/5)</h2>
	      <ul className="rows">
	        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Face down" rowNumber="1" disabled="1" />
	      </ul>
	    </div>
			<h2 className="group-label">Amount on cards</h2>
      <ul className="rows">
        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Birds" rowNumber="2" disabled="0" />
        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Bonuses" rowNumber="3" disabled="2" />
        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Goals" rowNumber="4" disabled="0" />
      </ul>
			<h2 className="group-label">1 point each</h2>
      <ul className="rows">
        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Eggs" rowNumber="5" disabled="0" />
        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Food" rowNumber="6" disabled="2" />
        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Tucked" rowNumber="7" disabled="2" />
      </ul>
			<h2 className="group-label">Each habitat 5/2</h2>
      <ul className="rows end">
        <ScoringRow currentPlayerCount={currentPlayerCount} currentScores={currentScores} changeScore={changeScore} rowLabel="Nectar" rowNumber="8" disabled="0" />
      </ul>
			<div className="total-scores">
        <TotalsRow currentPlayerCount={currentPlayerCount} getTotalScoreByPlayer={getTotalScoreByPlayer} />
			</div>
			<p className="feedback"><a href="	//ronansprake.co.uk/board-game-score-calculators#contact" target="_blank">Could this be better? Send me feedback</a></p>
		</div>
	);
}

export default App;
