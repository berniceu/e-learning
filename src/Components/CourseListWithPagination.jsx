import React, { useState } from 'react';
import CourseList from './CourseList';
import Pagination from './Pagination';
import '../style/index.css'
import Header from '../Components/header';
import Footer from './Footer';
import {Courses} from '../Components/Courses';

const CourseListWithPagination = () => {
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
      <Header/>
      <div className="courses">
      <CourseList courses={currentCourses} deleteCourse={deleteCourse} />
      <Pagination 
        pages={totalPages} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      
      />
      </div>
      
      <Footer/>
    </div>
  );
};

export default CourseListWithPagination;
