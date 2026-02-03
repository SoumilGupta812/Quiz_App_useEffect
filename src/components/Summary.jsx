import summaryImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import { LevelContext } from "../store/level-context";
import { useContext } from "react";
export default function Summary({ userAnswer }) {
  const skippedAnswer = userAnswer.filter((answer) => answer === null);
  const correctAnswer = userAnswer.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0],
  );
  const skippedAnswerShare = Math.round(
    (skippedAnswer.length / userAnswer.length) * 100,
  );
  const correctAnswerShare = Math.round(
    (correctAnswer.length / userAnswer.length) * 100,
  );
  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;
  const { difficulty } = useContext(LevelContext);
  return (
    <div id="summary">
      <img src={summaryImg} alt="Quiz completed" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">
            <strong>{difficulty}</strong>
          </span>
          <span className="text">difficulty</span>
        </p>
        <p>
          <span className="number">{skippedAnswerShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswerShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((answer, index) => {
          let cssClasses = "user-answer";
          if (answer === null) cssClasses += " skipped";
          else if (answer === QUESTIONS[index].answers[0])
            cssClasses += " correct";
          else cssClasses += " wrong";
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClasses}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
