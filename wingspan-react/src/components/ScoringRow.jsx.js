export default function ScoringRow({rowLabel, currentPlayerCount, currentScores, changeScore, rowNumber, disabled}) {
  const rows = [];
  if (currentPlayerCount === 1) {
    currentPlayerCount = 2;
  } else {
    disabled = false
  }
  for (var i = 1; i <= currentPlayerCount; i++) {
    const input = [
      i,
      i === disabled
    ]
    rows.push(input);
  }
  return (
    <li className="row js-row">
      <h3 className="row-label">{rowLabel}</h3>
      { rows.map( (text) => <PlayerInitialControl key={text[0]} label={rowLabel.replace(/\s+/g, '-').toLowerCase()} player={text[0]} row={rowNumber} isDisabled={text[1]} disabled={text[1]} changeScore={changeScore} currentScores={currentScores} value={currentScores[rowNumber-1][text[0]-1] ? currentScores[rowNumber-1][text[0]-1] : 0} /> ) }
    </li>
  );
}

function PlayerInitialControl({label, player, row, currentScores, changeScore, isDisabled, ...props}) {

  return (
    <div className="counter">
      <label htmlFor={"player-" + player + "-" + label}>Player {player}</label>
      <button onClick={() => {!isDisabled && changeScore(row,player,parseInt(currentScores[row-1][player-1]) - 1)}} className="js-decrement" data-player={row + "-" + player} tabIndex="-1">&ndash;</button>
      <input onChange={(e) => {e.target.value = e.target.value ? parseInt(e.target.value, 10) : ''; changeScore(row,player,(e.target.value))}} id={"player-" + player + "-" + label} onContextMenu={(e)=> e.preventDefault()} onFocus={(e)=> { e.target.select(); }} type="number" className="js-score" {...props} />
      <button onClick={() => {!isDisabled && changeScore(row,player,parseInt(currentScores[row-1][player-1]) + 1)}} className="js-increment" tabIndex="-1">+</button>
    </div>
  );
}
