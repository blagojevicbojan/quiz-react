import "./App.css";
import questions from "./data";
import FormQuestions from "./FormQuestions";
import Score from "./Score";
import Reset from "./Reset";

function App() {
  return (
    <div className="App">
      <h1>Kviz</h1>
      <FormQuestions questions={questions} />
      <>
        <Score />
        <Reset />
      </>
    </div>
  );
}

export default App;
