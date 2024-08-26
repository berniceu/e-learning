import React from 'react';
import './CourseInfo.scss';

const CourseInfo = () => {
    return (
        <div className="course-info">
            <div className="about-course">
                <h2>About the course</h2>
                <p>Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto...</p>
            </div>
            <div className="facts-skills">
                <div className="facts">
                    <h3>Facts</h3>
                    <ul>
                        <li>Beginner friendly</li>
                        <li>0/123 Lessons</li>
                        <li>123 Students Enrolled</li>
                    </ul>
                </div>
                <div className="skills">
                    <h3>Skills</h3>
                    <ul>
                        <li>Hard & Soft Skills</li>
                        <li>Communication Skills</li>
                        <li>Language</li>
                        <li>Teamwork</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseInfo;
