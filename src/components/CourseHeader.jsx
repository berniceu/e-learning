import React from 'react';
import './CourseHeader.scss';

const CourseHeader = () => {
    return (
        <div className="course-header">
            <div className="course-title">
                <h1>Name of the course</h1>
            </div>
            <button className="edit-button">Edit course</button>
        </div>
    );
};

export default CourseHeader;
