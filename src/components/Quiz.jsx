import React, { useState } from "react";
import './Quiz.css';

const questions = [
    {
        question: 'Which is the capital of Brazil?',
        options: ['Rio de Janeiro', 'São Paulo', 'Brasilia', 'Belo Horizonte'],
        answer: 'Brasilia'
    },

    {
        question: 'Who discovered Brazil?',
        options: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'],
        answer: 'Pedro Álvares Cabral'
    },

    {
        question: 'How many planets have in the Solar Sistem?',
        options: ['5', '7', '9', '8'],
        answer: '8'
    }
];

function Quiz() {
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [result, setResult] = useState(null);

    const toAnswer = (answerChoosed) => {
        setAnswers([...answers, answerChoosed]);
        if (indexQuestion + 1 < questions.length) {
            setIndexQuestion(indexQuestion + 1);
        } else {
            countResult();
        }
    };

    const countResult = () => {
        let pontuation = 0;
        for (let i = 0; 1 < questions.length; i++) {
            if (questions[i] === questions[i].question){
                pontuation++;
            }
        }

        setResult(pontuacao); 
    };


    const restartQuiz = () => {
        setIndexQuestion(0);
        setAnswers([]);
        setResult(null);
    };

    return (
        <div className="quiz-box">
            {result !== null ? (
                <div>
                    <h2>Quiz Result</h2>
                    <p>You got right {result} from {questions.length}questions!</p>
                    < button className="btn-restart" onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <h2>Question {indexQuestion + 1}</h2>
                    <p>{questions[indexQuestion].question}</p>
                    <ul>
                        {questions[indexQuestion].options.map((option, index) => (
                            <li className="option" key={index} onClick={() => toAnswer(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Quiz;