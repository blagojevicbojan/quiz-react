const Question = ({ question, ind }) => {
  return (
    <div className="question">
      <p>
        <span>{ind + 1}.) </span>
        {question.question}
      </p>
      {question.answers.map((a, i) => (
        <div key={i}>
          <input type="radio" value={a} name={`question${ind}`} />
          <label>{a}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
