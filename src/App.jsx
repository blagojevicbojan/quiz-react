import "./App.css";
import FormQuestions from "./FormQuestions";
import Score from "./Score";
import Reset from "./Reset";
import QuizContext from "./QuizContext";
import { useContext } from "react";
import Timer from "./Timer";

function App() {
  const { isSend, questions } = useContext(QuizContext);
  return (
    <div className="App">
      <h1>Kviz</h1>
      <Timer />
      <FormQuestions questions={questions} />
      {isSend && (
        <>
          <Score />
          <Reset />
        </>
      )}
    </div>
  );
}

export default App;
