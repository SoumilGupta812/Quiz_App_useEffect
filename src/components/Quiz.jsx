import QUESTIONS from "../questions.js";
import Summary from "./Summary.jsx";
import { useState, useCallback, useRef } from "react";
import Question from "./Question.jsx";
export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);

  const activeIndex = userAnswer.length;
  const isQuizComplete = userAnswer.length === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    SelectedAnswer
  ) {
    setUserAnswer((prev) => [...prev, SelectedAnswer]);
  },
  []);
  const skipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);
  if (isQuizComplete) {
    return <Summary userAnswer={userAnswer} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeIndex}
        index={activeIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={skipAnswer}
      />
    </div>
  );
}
