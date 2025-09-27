import React from 'react';
import { useDispatch } from 'react-redux';
import { parseResume } from '../utils/resumeParser';

function ResumeUpload() {
  const dispatch = useDispatch();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const parsedData = await parseResume(file);
    dispatch({ type: 'SET_CANDIDATE_INFO', payload: parsedData });
  };

  return (
    <div>
      <h2>📄 Upload Resume</h2>
      <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
    </div>
  );
}

export default ResumeUpload;
