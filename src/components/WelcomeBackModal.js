import React from 'react';

function CandidateDetails({ candidate }) {
  return (
    <div>
      <h3>{candidate.name}'s Details</h3>
      <p>Email: {candidate.email}</p>
      <p>Phone: {candidate.phone}</p>
      <p>Summary: {candidate.summary}</p>
      <ul>
        {candidate.answers.map((a, i) => (
          <li key={i}>
            <strong>Q:</strong> {a.question.text} <br />
            <strong>A:</strong> {a.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CandidateDetails;