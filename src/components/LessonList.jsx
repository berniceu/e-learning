import React from 'react';
import './LessonList.scss';

const lessons = [
    { title: 'Lesson 1', resource: 'Document on lesson 1', completed: true },
    { title: 'Lesson 2', resource: 'Document on lesson 2', completed: false },
    { title: 'Lesson 3', resource: 'Document on lesson 3', completed: false },
    { title: 'Lesson 4', resource: 'Document on lesson 4', completed: false },
];

const LessonList = () => {
    return (
        <div className="lesson-list">
            <h2>Lessons</h2>
            <ul>
                {lessons.map((lesson, index) => (
                    <li key={index} className={lesson.completed ? 'completed' : ''}>
                        <div className="lesson-info">
                            <div className="lesson-thumbnail">
                                <img src="placeholder-image.png" alt="Lesson thumbnail" />
                            </div>
                            <div className="lesson-details">
                                <h3>{lesson.title}</h3>
                                <p>Lesson details</p>
                            </div>
                        </div>
                        <div className="lesson-resources">
                            <p>Resources</p>
                            <p>{lesson.resource}</p>
                        </div>
                        <div className="lesson-status">
                            {lesson.completed ? <span className="completed-indicator">&#x2714;</span> : <span className="pending-indicator">&#x25CB;</span>}
                        </div>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>
        </div>
    );
};

export default LessonList;
