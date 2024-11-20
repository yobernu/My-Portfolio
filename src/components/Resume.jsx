import React from 'react';
import './../Styles/resume.css'; // Import CSS for styling

const Resume = ({ percentage, label }) => {
  return (
        <div className="progress-bar-container">
            <div className="progress-bar-label">
                {label}
            </div>
            <div className="progress-bar">
                <div
                className="progress-bar-fill"
                style={{ width: `${percentage}%` }}
                ></div>
            </div>
            <div className="progress-bar-percentage">
                {percentage}%
            </div>
        </div>
        

  );
};

export default Resume;


