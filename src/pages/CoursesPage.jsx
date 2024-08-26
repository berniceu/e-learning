import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../styles/courses/courses.css';
import CoursePopup from "../components/courses/CoursePopup";
import { IoBookmarks, IoFilter } from "react-icons/io5";




const CoursesAvailable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({
        level: 'Beginner friendly',
        industry: 'Accounting'
    });
    const courses = [
        { id: 1, name: "group1" },
        { id: 2, name: "group1" },
    ];
    const filteredCourses = courses.filter(course => {
        return course.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (course.level === selectedFilters.level || !selectedFilters.level) &&
            (course.industry === selectedFilters.industry || !selectedFilters.industry);
    });
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const toggleFilter = () => {
        setFilterOpen(!isFilterOpen);
    };
    const handleFilterChange = (type, value) => {
        setSelectedFilters(prev => ({ ...prev, [type]: value }));
    };

    return (
        <div className="courses-available">
            <div className="filter_search_container">
                <h2>Courses Available</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="search courses"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="bttn"
                    />
                    <button onClick={toggleFilter}>
                        <span className="filter-icon"><IoFilter /></span> Filter courses
                    </button>
                </div>
                {isFilterOpen && (
                    <div className="filter-popup">
                        <div className="filter-option">
                            <h4>Course Level</h4>
                            {['Beginner friendly', 'Moderate', 'Hard'].map(level => (
                                <div
                                    key={level}
                                    onClick={() => handleFilterChange('level', level)}
                                    className={selectedFilters.level === level ? 'selected' : ''}
                                >
                                    {level}
                                </div>
                            ))}
                        </div>
                        <div className="filter-option">
                            <h4>Industry</h4>
                            {['Accounting', 'Languages', 'Graphic design', 'Software Engineering', 'Digital Marketing', 'Tech support'].map(industry => (
                                <div
                                    key={industry}
                                    onClick={() => handleFilterChange('industry', industry)}
                                    className={selectedFilters.industry === industry ? 'selected' : ''}
                                >
                                    {industry}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div className="results">
                    <span><IoBookmarks /></span> <strong>{filteredCourses.length}</strong> RESULTS
                </div>
            </div>
        </div>
    );
};



const CoursesPage = () => {
    return (
        <>
            <Navbar />
            <CoursesAvailable />
            <Footer />
        </>
    )
}

export default CoursesPage;