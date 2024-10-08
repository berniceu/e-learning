import React from 'react';
import DeleteCourse from './DeleteCourse';

const CourseList = ({ courses, deleteCourse }) => {
  return (
    <div className="courses-card">
      {courses && courses.map((course, index) => (
        <div key={index} className="course">
          <div className="img">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="course-details">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <div className="time">
              <p><img src="../images/time.png" alt="" /><span>Time: <br />{course.duration}</span></p>
              <p><img src="../images/doc.png" alt="" /><span>Level: <br />{course.level}</span></p>
            </div>
            <DeleteCourse deleteCourse={deleteCourse} index={index} /> {/* Using the DeleteCourse Component */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
