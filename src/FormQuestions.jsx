import Button from "./Button";
import Questions from "./Questions";

const FormQuestions = ({ questions }) => {
  return (
    <form>
      <Questions questions={questions} />
      <Button>Send</Button>
    </form>
  );
};

export default FormQuestions;
