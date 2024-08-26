import React from 'react';

const StudentCount = ({ number, description}) => {
  return (
    <div className="student-count">
      <h2>{number}</h2>
      <p>{description}</p>
    </div>
  );
};

export default StudentCount;