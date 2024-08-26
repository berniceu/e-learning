import React from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
    return (
        <div className="progress-section">
            <div className="progress-bar">
                <h2>Your Progress</h2>
                <div className="bar">
                    <div className="filled-bar" style={{ width: '0%' }}></div>
                </div>
                <p>Level <span>0%</span></p>
            </div>
            <div className="course-status">
                <p><strong>1</strong> Courses Completed</p>
                <p><strong>4</strong> Courses Left</p>
            </div>
        </div>
    );
};

export default ProgressBar;
