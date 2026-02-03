import ProgressBar from "./ProgressBar";
import Answers from "./Answers";
import QUESTIONS from "../questions";
import { useState } from "react";
import { LevelContext } from "../store/level-context";
import { useContext } from "react";
export default function Question({ index, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  const { timer: a } = useContext(LevelContext);
  let timer = a;
  if (answer.selectedAnswer) timer = 1000;
  if (answer.isCorrect !== null) timer = 2000;
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer,
      });
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null)
    answerState = answer.isCorrect ? "correct" : "wrong";
  else if (answer.selectedAnswer) answerState = "answered";
  return (
    <div className="questions">
      <ProgressBar
        timeout={timer}
        key={timer}
        mode={answerState}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answerState={answerState}
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
