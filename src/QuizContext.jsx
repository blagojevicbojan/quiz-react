import { createContext, useRef, useEffect, useState } from "react";
import rawQuestions from "./data";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [isSend, setIsSend] = useState(false);
  const [userAnswers, setUserAnswers] = useState(
    new Array(rawQuestions.length)
  );
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(rawQuestions).map((q) => ({
      ...q,
      answers: shuffleArray(q.answers),
    }));
    setQuestions(shuffled);
  }, []);

  // Timer
  const DURATION = 60;
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const timerRef = useRef(null);

  // Odgovori korisnika
  const addUserAnswers = (answer, ind) => {
    const newArray = [...userAnswers];
    newArray[ind] = answer;
    setUserAnswers((a) => [...newArray]);
  };

  // Rezultat
  const finalScore = () => {
    userAnswers.forEach(
      (a, i) => questions[i].correct === a && setScore((s) => s + 1)
    );
  };

  // Slanje forme kviza
  const sendQuiz = () => {
    setIsSend(true);
    clearInterval(timerRef.current);
    finalScore();
  };

  // Resetovanje kviza
  const onReset = () => {
    setIsSend(false);
    setUserAnswers(new Array(questions.length));
    setScore(0);
  };

  // Shuffle array

  const shuffleArray = (array) => {
    const copy = [...array];
    for (let i = 0; i <= copy.length - 1; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  return (
    <QuizContext.Provider
      value={{
        score,

        isSend,

        userAnswers,

        addUserAnswers,

        sendQuiz,

        onReset,
        timeLeft,
        setTimeLeft,
        timerRef,

        questions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
