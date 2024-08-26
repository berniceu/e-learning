import React from 'react';

const SuccessCard = ({title, description}) => {
  return (
    <div className="success-card">
      <div className="icon-wrapper">
      <div className="icon-container">
      <img src='/images/file.svg' alt={title + " icon"} />
      </div>
      </div>
      
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SuccessCard;