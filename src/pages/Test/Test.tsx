import { questions as aquestions } from "./Questions";
import React from "react";
import { Question } from "../../models/interfaces";

export default function Test() {
  const [questions] = React.useState<Question[]>(aquestions);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(
    Array(questions.length).fill(null)
  );
  const [showAnswers, setShowAnswers] = React.useState(false);

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const backQuestion = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const currentQuestion = questions[currentIndex];

  const handleShowAnswers = () => {
    setShowAnswers(true);
  };

  const resetTest = () => {
    setCurrentIndex(0);
    setAnswers(Array(questions.length).fill(null));
    setShowAnswers(false);
  };

  const getAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  if (showAnswers) {
    return (
      <div className="m-auto bg-white rounded-xl p-4 text-center w-[95vw] max-w-[600px] h-[80vh] overflow-auto">
        <h1 className="text-xl md:text-2xl mb-4">Результаты теста</h1>
        <div className="text-left space-y-4">
          {questions.map((question, qIndex) => (
            <div key={qIndex} className="mb-4 p-2 border-b">
              <h3 className="font-bold text-sm md:text-base">
                {question.text}
              </h3>
              <p className="mt-1 text-xs md:text-sm">
                Ваш ответ:{" "}
                {answers[qIndex] !== null ? (
                  <span
                    className={
                      answers[qIndex] === question.correctIndex
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    {question.options[answers[qIndex] as number]}
                  </span>
                ) : (
                  "Нет ответа"
                )}
              </p>
              <p className="text-xs md:text-sm">
                Правильный ответ:{" "}
                <span className="text-green-600">
                  {question.options[question.correctIndex]}
                </span>
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={resetTest}
          className="mt-6 bg-blue-500 text-white rounded-lg px-4 py-2 text-sm md:text-base cursor-pointer hover:bg-blue-600 transition-all active:scale-95"
        >
          Пройти тест заново
        </button>
      </div>
    );
  }
  return (
    <div className="m-auto w-full px-2">
      <div className="bg-white rounded-xl p-3 text-center w-full max-w-[600px] mx-auto overflow-auto">
        <h1 className="text-xl md:text-3xl font-bold mb-4 h-16 md:h-20 overflow-hidden line-clamp-2">
          {currentQuestion?.text}
        </h1>
        <div className="flex flex-col gap-2 h-[30vh] md:h-48 overflow-y-auto">
          {currentQuestion?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => getAnswer(index)}
              className={`border text-sm md:text-base rounded-lg p-2 md:p-[10px] cursor-pointer transition-all active:scale-95 text-left ${
                answers[currentIndex] === index
                  ? "bg-blue-400 border-blue-500"
                  : "hover:bg-gray-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-2 mt-4">
          <button
            className="bg-white border rounded-lg p-2 text-sm md:text-base cursor-pointer hover:bg-gray-100 transition-all active:scale-95 w-full sm:w-48"
            onClick={backQuestion}
            disabled={currentIndex <= 0}
          >
            Предыдущий вопрос
          </button>
          {currentIndex >= questions.length - 1 ? (
            <button
              className="bg-blue-500 text-white rounded-lg p-2 text-sm md:text-base cursor-pointer hover:bg-blue-600 transition-all active:scale-95 w-full sm:w-48"
              onClick={handleShowAnswers}
              disabled={answers[currentIndex] === null}
            >
              Показать результат
            </button>
          ) : (
            <button
              className="bg-white border rounded-lg p-2 text-sm md:text-base cursor-pointer hover:bg-gray-100 transition-all active:scale-95 w-full sm:w-48"
              onClick={nextQuestion}
              disabled={answers[currentIndex] === null}
            >
              Следующий вопрос
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
