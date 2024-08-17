export default function PlayerToggle({players, setPlayers}) {

  function changePlayerCount(newPlayers) {
    setPlayers(newPlayers);
  }

  return (
    <fieldset className="players">
      <legend>Players</legend>
      <ul>
        <li>
          <input type="radio" onChange={ () => changePlayerCount(1)} id="players-1" name="player" />
          <label htmlFor="players-1">1</label>
        </li>
        <li>
          <input type="radio" onChange={ () => changePlayerCount(2)} id="players-2" name="player" defaultChecked />
          <label htmlFor="players-2">2</label>
        </li>
        <li>
          <input type="radio" onChange={ () => changePlayerCount(3)} id="players-3" name="player" />
          <label htmlFor="players-3">3</label>
        </li>
        <li>
          <input type="radio" onChange={ () => changePlayerCount(4)} id="players-4" name="player" />
          <label htmlFor="players-4">4</label>
        </li>
        <li>
          <input type="radio" onChange={ () => changePlayerCount(5)} id="players-5" name="player" />
          <label htmlFor="players-5">5</label>
        </li>
      </ul>
    </fieldset>
  );
}