import React, { useState, useEffect, useRef } from "react";
import CourseList from "./CourseList";
import Pagination from "./Pagination";
import CoursesData from "../data/CoursesData";
import "../style/index.css";
import Header from "../Components/header";
import Footer from "../Components/footer";
import CoursesComponents from "./courses/CoursesComponents";

const CourseListWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState(CoursesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    level: "",
  });

  const filterRef = useRef(null); 

  const itemsPerPage = 8;
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const currentCourses = courses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const deleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
  };
  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };
  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => ({ ...prev, [type]: value }));
  };
  const filteredCourses = courses.filter((course) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseTitle = course.title.toLowerCase();
    const lowerCaseLevel = course.level.toLowerCase();
    const matchesSearch = lowerCaseTitle.includes(lowerCaseQuery);
    const matchesLevel =
      selectedFilters.level === "" ||
      lowerCaseLevel === selectedFilters.level.toLowerCase();
    return matchesSearch && matchesLevel;
  });
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]);

  return (
    <>
      <Header />
      <div className="courses div">
        <CoursesComponents
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          toggleFilter={toggleFilter}
          isFilterOpen={isFilterOpen}
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          filteredCourses={filteredCourses}
          filterRef={filterRef} 
        />
        <CourseList courses={filteredCourses} deleteCourse={deleteCourse} />
        <Pagination
          pages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </>
  );
};

export default CourseListWithPagination;
