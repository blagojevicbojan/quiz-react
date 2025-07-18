import { useContext } from "react";
import Button from "./Button";
import Questions from "./Questions";
import QuizContext from "./QuizContext";

const FormQuestions = ({ questions }) => {
  const { isSend, sendQuiz } = useContext(QuizContext);

  const handleSend = (e) => {
    e.preventDefault();
    sendQuiz();
  };

  return (
    <form>
      <Questions questions={questions} />
      {!isSend && (
        <Button handleClick={(event) => handleSend(event)}>Send</Button>
      )}
    </form>
  );
};

export default FormQuestions;
