import React from 'react';
import { useParams } from 'react-router-dom';
import CoursesData from '../data/CoursesData';
import Header from "../Components/header";
import Footer from '../Components/footer';

const CourseDetailPage = () => {
    const { id } = useParams();
    const course = CoursesData.find((course) => course.id === parseInt(id));

    if (!course) {
        return <div>Course not found</div>;
    }

    return (
        <>
            <Header />
            <div className="courses div">
                <div className="course-header">
                    <h1>{course.title}</h1>
                    <img src={course.image} alt={course.title} />
                </div>
                <div className="course-info">
                    <p><strong>Description:</strong> {course.description}</p>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Level:</strong> {course.level}</p>
                    <p><strong>Proficiency Level:</strong> {course.proficiencyLevel}</p>
                    <p><strong>Skills Needed:</strong> {course.skillsNeeded}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CourseDetailPage;

