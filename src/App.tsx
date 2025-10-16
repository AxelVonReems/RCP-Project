import { useState } from 'react';

function App() {
  // Question variables
  const question1 = "¿Cuál es el primer paso al encontrar a una persona inconsciente?";
  const quest1Ans1 = "Comenzar el masaje cardíaco inmediatamente";
  const quest1Ans2 = "Verificar si responde y si respira"; // Correct
  const quest1Ans3 = "Buscar ayuda médica sin tocar al paciente";
  const quest1Ans4 = "Dar dos ventilaciones de rescate";

  const question2 = "¿Cuál es la frecuencia de compresiones recomendada en una RCP de adulto?";
  const quest2Ans1 = "60 por minuto";
  const quest2Ans2 = "80 por minuto";
  const quest2Ans3 = "100-120 por minuto"; // Correct
  const quest2Ans4 = "150 por minuto";

  const question3 = "¿Cuál es la relación compresiones-ventilaciones en un adulto?";
  const quest3Ans1 = "15:2";
  const quest3Ans2 = "30:2"; // Correct
  const quest3Ans3 = "5:1";
  const quest3Ans4 = "20:2";

  const question4 = "¿Dónde se deben colocar las manos para realizar compresiones torácicas?";
  const quest4Ans1 = "En el centro del pecho, sobre el esternón"; // Correct
  const quest4Ans2 = "En el abdomen, justo encima del ombligo";
  const quest4Ans3 = "En el lado izquierdo del pecho";
  const quest4Ans4 = "En el cuello";

  const question5 = "¿Qué debe hacerse después de que la víctima recupere la respiración?";
  const quest5Ans1 = "Darle agua o comida";
  const quest5Ans2 = "Abandonar la escena";
  const quest5Ans3 = "Continuar con las compresiones torácicas";
  const quest5Ans4 = "Colocarla en posición lateral de seguridad"; // Correct

  // States
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [quizFinished, setQuizFinished] = useState(false);

  // Track correctness per question
  const [q1Correct, setQ1Correct] = useState(false);
  const [q2Correct, setQ2Correct] = useState(false);
  const [q3Correct, setQ3Correct] = useState(false);
  const [q4Correct, setQ4Correct] = useState(false);
  const [q5Correct, setQ5Correct] = useState(false);

  // QuestionCard component (explicit buttons)
  const QuestionCard = ({ question, ans1, ans2, ans3, ans4, correct, handleAnswer }: any) => {
    return (
      <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-xl shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6 text-center">{question}</h2>

        <button
          onClick={() => handleAnswer(1 === correct)}
          className="bg-orange-200 text-black font-semibold py-2 rounded-lg mb-4 w-full hover:bg-orange-600 hover:text-white transition"
        >
          {ans1}
        </button>

        <button
          onClick={() => handleAnswer(2 === correct)}
          className="bg-orange-200 text-black font-semibold py-2 rounded-lg mb-4 w-full hover:bg-orange-600 hover:text-white transition"
        >
          {ans2}
        </button>

        <button
          onClick={() => handleAnswer(3 === correct)}
          className="bg-orange-200 text-black font-semibold py-2 rounded-lg mb-4 w-full hover:bg-orange-600 hover:text-white transition"
        >
          {ans3}
        </button>

        <button
          onClick={() => handleAnswer(4 === correct)}
          className="bg-orange-200 text-black font-semibold py-2 rounded-lg mb-4 w-full hover:bg-orange-600 hover:text-white transition"
        >
          {ans4}
        </button>
      </div>
    );
  };

  // Handle answer clicks
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);

    // Save result for the current question
    if (currentQuestion === 1) setQ1Correct(isCorrect);
    if (currentQuestion === 2) setQ2Correct(isCorrect);
    if (currentQuestion === 3) setQ3Correct(isCorrect);
    if (currentQuestion === 4) setQ4Correct(isCorrect);
    if (currentQuestion === 5) setQ5Correct(isCorrect);

    // Move to next question or finish quiz
    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  // Restart quiz
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(1);
    setQuizFinished(false);
    setStarted(false);
    setQ1Correct(false);
    setQ2Correct(false);
    setQ3Correct(false);
    setQ4Correct(false);
    setQ5Correct(false);
  };

  return (
    <div className="h-screen w-screen bg-blue-200 flex flex-col justify-center items-center p-4">
      {!started ? (
        // Start screen
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold text-orange-500 mb-8">PCR QUIZ</h1>
          <button
            className="bg-white text-blue-500 font-semibold text-xl px-8 py-4 rounded-2xl shadow-md hover:bg-orange-500 hover:text-white transition"
            onClick={() => setStarted(true)}
          >
            Empezar
          </button>
        </div>
      ) : quizFinished ? (
        // Final score screen with colored circles
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">¡Has terminado!</h2>
          <p className="text-xl mb-6">Puntuación: {score} / 5</p>

          {/* Circles */}
          <div className="flex gap-4 mb-6">
            <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold ${q1Correct ? 'bg-green-500' : 'bg-red-500'}`}>1</div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold ${q2Correct ? 'bg-green-500' : 'bg-red-500'}`}>2</div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold ${q3Correct ? 'bg-green-500' : 'bg-red-500'}`}>3</div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold ${q4Correct ? 'bg-green-500' : 'bg-red-500'}`}>4</div>
            <div className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold ${q5Correct ? 'bg-green-500' : 'bg-red-500'}`}>5</div>
          </div>

          {/* Restart button */}
          <button
            onClick={restartQuiz}
            className="bg-white text-blue-500 font-semibold text-xl px-8 py-4 rounded-2xl shadow-md hover:bg-orange-500 hover:text-white transition"
          >
            Volver a empezar
          </button>
        </div>
      ) : (
        // Question cards
        <>
          {currentQuestion === 1 && (
            <QuestionCard
              question={question1}
              ans1={quest1Ans1}
              ans2={quest1Ans2}
              ans3={quest1Ans3}
              ans4={quest1Ans4}
              correct={2}
              handleAnswer={handleAnswer}
            />
          )}
          {currentQuestion === 2 && (
            <QuestionCard
              question={question2}
              ans1={quest2Ans1}
              ans2={quest2Ans2}
              ans3={quest2Ans3}
              ans4={quest2Ans4}
              correct={3}
              handleAnswer={handleAnswer}
            />
          )}
          {currentQuestion === 3 && (
            <QuestionCard
              question={question3}
              ans1={quest3Ans1}
              ans2={quest3Ans2}
              ans3={quest3Ans3}
              ans4={quest3Ans4}
              correct={2}
              handleAnswer={handleAnswer}
            />
          )}
          {currentQuestion === 4 && (
            <QuestionCard
              question={question4}
              ans1={quest4Ans1}
              ans2={quest4Ans2}
              ans3={quest4Ans3}
              ans4={quest4Ans4}
              correct={1}
              handleAnswer={handleAnswer}
            />
          )}
          {currentQuestion === 5 && (
            <QuestionCard
              question={question5}
              ans1={quest5Ans1}
              ans2={quest5Ans2}
              ans3={quest5Ans3}
              ans4={quest5Ans4}
              correct={4}
              handleAnswer={handleAnswer}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
