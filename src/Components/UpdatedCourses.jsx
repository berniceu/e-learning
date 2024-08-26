import React, { useState } from 'react';
import CourseList from './CourseList';
import { Courses } from './Courses';

const UpdatedCourses = () => {
  const [courses, setCourses] = useState(Courses);

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div>
      <h2>Course List</h2>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </div>
  );
};

export default UpdatedCourses;
