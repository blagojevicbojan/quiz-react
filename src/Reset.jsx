import { useContext } from "react";
import Button from "./Button";
import QuizContext from "./QuizContext";

const Reset = () => {
  const { onReset } = useContext(QuizContext);
  return <Button handleClick={onReset}>Reset</Button>;
};

export default Reset;
