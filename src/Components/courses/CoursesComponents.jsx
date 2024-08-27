import React from "react";
import { IoFilter, IoBookmarks } from "react-icons/io5";
import '../../styles/courses/courses.css';

const CoursesComponents = ({
  searchQuery,
  setSearchQuery,
  toggleFilter,
  isFilterOpen,
  selectedFilters,
  handleFilterChange,
  filteredCourses,
  filterRef
}) => {
  return (
    <div className="courses-available">
      <div className="filter_search_container">
        <h2>Courses Available</h2>
        <div className="search-bar-filter">
          <input
            type="text"
            placeholder="Search courses"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="button"
          />
          <button onClick={toggleFilter}>
            <span className="filter-icon">
              <IoFilter />
            </span>{" "}
            Filter courses
          </button>
        </div>
        {isFilterOpen && (
          <div className="filter-popup" ref={filterRef}>
            <div className="filter-option">
              <h4>Course Level</h4>
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <div
                  key={level}
                  onClick={() => handleFilterChange("level", level)}
                  className={selectedFilters.level === level ? "selected" : ""}
                >
                  {level}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="results">
          <span>
            <IoBookmarks />
          </span>{" "}
          <strong>{filteredCourses.length}</strong> results
        </div>
      </div>
    </div>
  );
};

export default CoursesComponents;
