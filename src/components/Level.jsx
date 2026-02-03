import { LevelContext } from "../store/level-context";
import { useContext } from "react";
export default function Level() {
  const { setDifficulty } = useContext(LevelContext);
  return (
    <div id="level">
      <button onClick={() => setDifficulty(0)}>EASY</button>
      <button onClick={() => setDifficulty(1)}>MEDIUM</button>
      <button onClick={() => setDifficulty(2)}>HARD</button>
    </div>
  );
}
