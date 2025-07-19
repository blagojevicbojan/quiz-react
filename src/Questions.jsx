import Question from "./Question";

const Questions = ({ questions }) => {
  return (
    <div className="questions">
      {questions.map((q, i) => (
        <Question key={i} {...q} ind={i} />
      ))}
    </div>
  );
};

export default Questions;
