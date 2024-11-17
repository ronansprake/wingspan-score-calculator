export default function TotalsRow({currentPlayerCount, getTotalScoreByPlayer}) {
  const rows = [];
  if (currentPlayerCount === 1) {
    currentPlayerCount = 2;
  }
  for (var i = 1; i <= currentPlayerCount; i++) {
    const input = [
      i
    ]
    rows.push(input);
  }
  return (
    <>
      <h3 className="row-label">Totals</h3>
      { rows.map( (text) => <PlayerTotal key={text[0]} player={text[0]} getTotalScoreByPlayer={getTotalScoreByPlayer} /> ) }
    </>
  );
}

function PlayerTotal({player, getTotalScoreByPlayer}) {

  return (
    <div className="total-score player-1 js-total-score-player-1">{ getTotalScoreByPlayer(player - 1) }</div>
  );
}