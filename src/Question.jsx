import { useContext } from "react";
import QuizContext from "./QuizContext";

const Question = ({ question, ind }) => {
  const { userAnswers, addUserAnswers, isSend } = useContext(QuizContext);

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
        <div
          key={i}
          style={{
            color:
              isSend && // if send
              userAnswers[ind] === a && // if checked
              userAnswers[ind] === question.correct // if correct
                ? "green"
                : isSend && userAnswers[ind] === a && "red", // if send && if checked (and if wrong) => 'red'
          }}
        >
          <input
            type="radio"
            value={a}
            name={`question${ind}`}
            checked={userAnswers[ind] === a}
            disabled={isSend}
            onChange={(event) => handleChangedInput(event)}
          />
          <label>{a}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
