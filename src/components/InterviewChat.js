import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function InterviewChat() {
  const dispatch = useDispatch();
  const candidate = useSelector((state) => state.candidate);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [timer, setTimer] = useState(0);
  const [questions] = useState([
    { level: 'Easy', text: 'What is React?', time: 20 },
    { level: 'Easy', text: 'What is JSX?', time: 20 },
    { level: 'Medium', text: 'Explain useEffect.', time: 60 },
    { level: 'Medium', text: 'What is Redux?', time: 60 },
    { level: 'Hard', text: 'How does reconciliation work in React?', time: 120 },
    { level: 'Hard', text: 'Explain React Fiber.', time: 120 },
  ]);

  useEffect(() => {
    if (questionIndex < questions.length) {
      setTimer(questions[questionIndex].time);
    }
  }, [questionIndex]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      submitAnswer();
    }
  }, [timer]);

  const submitAnswer = () => {
    dispatch({
      type: 'SAVE_ANSWER',
      payload: { question: questions[questionIndex], answer },
    });
    setAnswer('');
    setQuestionIndex(questionIndex + 1);
  };

  if (questionIndex >= questions.length) {
    return <div>✅ Interview Complete! AI is calculating your score...</div>;
  }

  return (
    <div>
      <h2>💬 Interview Chat</h2>
      <p><strong>Question:</strong> {questions[questionIndex].text}</p>
      <p><strong>Time Left:</strong> {timer}s</p>
      <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={submitAnswer}>Submit</button>
    </div>
  );
}

export default InterviewChat;