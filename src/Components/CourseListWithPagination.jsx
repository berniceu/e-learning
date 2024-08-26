import React, { useState } from 'react';
import CourseList from './CourseList';
import Pagination from './Pagination';

const CourseListWithPagination = ({ Courses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState(Courses); // Manage state locally
  const itemsPerPage = 8;

  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const currentCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };

  return (
    <div>
      <CourseList courses={currentCourses} deleteCourse={deleteCourse} />
      <Pagination 
        pages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default CourseListWithPagination;
