import React from 'react';
import { useSelector } from 'react-redux';
import CandidateDetails from './CandidateDetails';

function InterviewerDashboard() {
  const candidates = useSelector((state) => state.candidates);

  return (
    <div>
      <h2>📊 Interviewer Dashboard</h2>
      <ul>
        {candidates.map((c, i) => (
          <li key={i}>
            {c.name} — Score: {c.score}
            <CandidateDetails candidate={c} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InterviewerDashboard;