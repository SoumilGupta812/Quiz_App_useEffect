import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Level from "./components/Level";
import { LevelContext } from "./store/level-context";
import { useState } from "react";
function App() {
  const [difficulty, setDifficulty] = useState({
    difficulty: "unchosen",
    timer: 15000,
  });
  function handleDifficulty(value) {
    if (value === 0) setDifficulty({ difficulty: "EASY", timer: 15000 });
    if (value === 1) setDifficulty({ difficulty: "MEDIUM", timer: 10000 });
    if (value === 2) setDifficulty({ difficulty: "HARD", timer: 7500 });
  }
  const ctxValue = {
    difficulty: difficulty.difficulty,
    timer: difficulty.timer,
    setDifficulty: handleDifficulty,
  };

  return (
    <LevelContext.Provider value={ctxValue}>
      <Header />
      <main>{difficulty.difficulty === "unchosen" ? <Level /> : <Quiz />}</main>
    </LevelContext.Provider>
  );
}

export default App;
