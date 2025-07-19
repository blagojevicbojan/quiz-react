import "./App.css";
import questions from "./data";
import FormQuestions from "./FormQuestions";
import Score from "./Score";
import Reset from "./Reset";
import QuizContext from "./QuizContext";
import { useContext } from "react";

function App() {
  const { isSend } = useContext(QuizContext);
  return (
    <div className="App">
      <h1>Kviz</h1>
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
