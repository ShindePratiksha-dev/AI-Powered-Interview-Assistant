import React, { useEffect, useState } from 'react';
import ResumeUpload from './components/ResumeUpload';
import InterviewChat from './components/InterviewChat';
import InterviewerDashboard from './components/InterviewerDashboard';
import WelcomeBackModal from './components/WelcomeBackModal';

function App() {
  const [activeTab, setActiveTab] = useState('interviewee');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedSession = localStorage.getItem('interviewProgress');
    if (savedSession) setShowModal(true);
  }, []);

  return (
    <div className="App">
      <h1>🧠 AI Interview Assistant</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('interviewee')}>Interviewee</button>
        <button onClick={() => setActiveTab('interviewer')}>Interviewer</button>
      </div>
      {showModal && <WelcomeBackModal onClose={() => setShowModal(false)} />}
      {activeTab === 'interviewee' ? (
        <>
          <ResumeUpload />
          <InterviewChat />
        </>
      ) : (
        <InterviewerDashboard />
      )}
    </div>
  );
}

export default App;