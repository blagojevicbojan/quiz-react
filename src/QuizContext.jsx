import { createContext, useState } from "react";
import questions from "./data";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isSend, setIsSend] = useState(false);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length));

  const addUserAnswers = (answer, ind) => {
    const newArray = [...userAnswers];
    newArray[ind] = answer;
    setUserAnswers((a) => [...newArray]);
  };

  const finalScore = () => {
    userAnswers.forEach(
      (a, i) => questions[i].correct === a && setScore((s) => s + 1)
    );
  };

  const sendQuiz = () => {
    setIsSend(true);
    finalScore();
  };

  return (
    <QuizContext.Provider
      value={{ score, isSend, userAnswers, addUserAnswers, sendQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
