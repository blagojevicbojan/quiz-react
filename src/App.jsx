import "./App.css";
import questions from "./data";
import FormQuestions from "./FormQuestions";
import Score from "./Score";
import Reset from "./Reset";
import { QuizProvider } from "./QuizContext";

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <h1>Kviz</h1>
        <FormQuestions questions={questions} />
        <>
          <Score />
          <Reset />
        </>
      </div>
    </QuizProvider>
  );
}

export default App;
