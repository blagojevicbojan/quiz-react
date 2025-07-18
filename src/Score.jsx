import { useContext } from "react";
import QuizContext from "./QuizContext";

const Score = () => {
  const { score } = useContext(QuizContext);
  return (
    <div className="score">
      <p>
        Vaš rezultat je: <b>{score}</b>
      </p>
    </div>
  );
};

export default Score;
