import { useContext, useEffect } from "react";
import QuizContext from "./QuizContext";

const Timer = () => {
  const { timerRef, timeLeft, setTimeLeft, isSend, sendQuiz } =
    useContext(QuizContext);

  useEffect(() => {
    if (isSend) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isSend]); // za svaku promenu isSend (za klik na dugme Send)

  useEffect(() => {
    if (timeLeft <= 0) {
      // Kada istekne vreme, šalje se forma kviza
      sendQuiz();
    }
  }, [timeLeft]); // za svaku promenu timeLeft

  return <div className="timer">Vreme: {timeLeft}</div>;
};

export default Timer;
