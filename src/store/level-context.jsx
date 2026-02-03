import { createContext, useState } from "react";
export const LevelContext = createContext({
  difficulty: "unchosen",
  timer: 15000,
  setDifficulty: () => {},
});
export default function LevelContextProvider({ children }) {
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
    <LevelContext.Provider value={ctxValue}>{children}</LevelContext.Provider>
  );
}
