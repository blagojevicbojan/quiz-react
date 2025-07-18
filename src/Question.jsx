import { useContext } from "react";
import QuizContext from "./QuizContext";

const Question = ({ question, ind }) => {
  const { userAnswers, addUserAnswers } = useContext(QuizContext);

  const handleChangedInput = (e) => {
    addUserAnswers(e.target.value, ind);
    console.log(userAnswers);
  };

  return (
    <div className="question">
      <p>
        <span>{ind + 1}.) </span>
        {question.question}
      </p>
      {question.answers.map((a, i) => (
        <div key={i}>
          <input
            type="radio"
            value={a}
            name={`question${ind}`}
            onChange={(event) => handleChangedInput(event)}
          />
          <label>{a}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
