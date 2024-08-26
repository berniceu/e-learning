import React, { useState } from 'react';
import CourseList from './CourseList';
import Pagination from './Pagination';
import '../style/index.css'
import Header from '../components/header';
import Footer from '../components/Footer';

const CourseListWithPagination = () => {
  const coursesData = [
    {
      title: "Introduction to React",
      description: "Learn the basics of React",
      image: "../images/react-intro.png",
      duration: "4 weeks",
      level: "Beginner"
    },
    {
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript concepts",
      image: "../images/js-advanced.png",
      duration: "6 weeks",
      level: "Intermediate"
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState(coursesData);
  const itemsPerPage = 8;

  

  const totalPages = Math.ceil(courses && courses.length / itemsPerPage);

  const currentCourses = courses && courses.slice(
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
