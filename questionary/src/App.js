import './App.css';
import { useState } from 'react';

function App() {
  const questions = [
    {
      questionText: 'What is the capital of USA ?',
      answerOptions: [
        { answerText: 'Boston', isCorrect: false },
        { answerText: 'Washington', isCorrect: true },
        { answerText: 'New York', isCorrect: false },
        { answerText: 'Los Angeles', isCorrect: false },
      ]
    },
    {
      questionText: 'In this holiday ghosts and witches come out...',
      answerOptions: [
        { answerText: 'St. Valentine', isCorrect: false },
        { answerText: 'New Year', isCorrect: false },
        { answerText: 'Halloween', isCorrect: true },
        { answerText: 'Independence Day', isCorrect: false },
      ]
    },
    {
      questionText: 'In what month do we celebrate Women’s Day?',
      answerOptions: [
        { answerText: 'May', isCorrect: false },
        { answerText: 'March', isCorrect: true },
        { answerText: 'September', isCorrect: false },
        { answerText: 'June', isCorrect: false },
      ]
    },
    {
      questionText: 'When did Ukrainian adopt the Declaration of State Sovereignty?',
      answerOptions: [
        { answerText: 'in June, 1990', isCorrect: false },
        { answerText: 'in August, 1990', isCorrect: false },
        { answerText: 'in March, 1990', isCorrect: false },
        { answerText: 'in July, 1990', isCorrect: true },
      ]
    },

  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)

    }
  }

  const refresh = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }


  return (
    <div className="app">
      {
        showScore
          ? <div className='section_score'>
            <div>Correct answers {score} from {questions.length}</div>
            <button
              className='refresh_btn'
              onClick={refresh}
            >Try again ...</button>
          </div>

          : <div className='quizz'>
            <div className='question_section'>
              <div className='question_count'>
                <span>Question {currentQuestion + 1}</span> / {questions.length}
              </div>
              <div className='question_text'> {questions[currentQuestion].questionText}</div>
            </div>
            <div className='answer_section'>
              {questions[currentQuestion].answerOptions.map(item => (
                <button
                  onClick={() => handleAnswerOptionClick(item.isCorrect)}
                >{item.answerText}</button>
              )
              )}

            </div>

          </div>
      }
    </div>
  );
}

export default App;
