import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { FaClock, FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../config";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();

    return (
        <div className="course-card" style={{ cursor: 'pointer' }} onClick={() => navigate(`/courses/${course.id}`)}>
            <div className="img-container">
                <img src={course.image} alt={course.title} />
            </div>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <div className="hrs-level">
                <div className="hours">
                    <div>
                        <FaClock size={20} color="#1E7938" />
                    </div>
                    <div className="time">
                        <p>{course.duration} hours</p>
                    </div>
                </div>
                <div className="level">
                    <div>
                        <FaBook size={20} color="#1E7938" />
                    </div>
                    <div className="level-text">
                        <p>{course.level}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/dashboard/educational_resources/`);
                console.log('API Response:', response.data);
                setCourses(response.data.educational_resources);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

const isEmployer = () =>{
    return localStorage.getItem('role') === 'staff';
}

    return (
        <>
            <Header/>
            <div className="courses-container">
                <div className="courses-title">
                    <h1>Courses</h1>
                    {isEmployer() && <Link to="/courses/new-course" className="new-course-button">Add New Course</Link>}
                </div>
                <div className="courses-cards">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Courses;