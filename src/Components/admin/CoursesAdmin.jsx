import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import '../../styles/admin/admin.css';
import { IoPerson, IoTrashBin, IoPencilOutline } from 'react-icons/io5';


const coursesData = [
    {
        id: 1,
        name: "Programming",
        industry: "Computer Science",
        details: "Learn the basics of programming using Python.",
        startDate: "2024-09-01",
        endDate: "2024-12-01",
        proficiencyLevel: "Beginner",
        skillsNeeded: "Basic Computer Knowledge",
        image: "https://example.com/images/programming.jpg",
        enrollment: 120,
    },
    {
        id: 2,
        name: "Data Science",
        industry: "Data Science",
        details: "An introductory course on data science and analytics.",
        startDate: "2024-10-01",
        endDate: "2025-01-01",
        proficiencyLevel: "Intermediate",
        skillsNeeded: "Python, Statistics",
        image: "https://example.com/images/datascience.jpg",
        enrollment: 85,
    }, 
    {
        id: 3,
        name: "Programming",
        industry: "Computer Science",
        details: "Learn the basics of programming using Python.",
        startDate: "2024-09-01",
        endDate: "2024-12-01",
        proficiencyLevel: "Beginner",
        skillsNeeded: "Basic Computer Knowledge",
        image: "https://example.com/images/programming.jpg",
        enrollment: 120,
    },
    {
        id: 2,
        name: "Data Science",
        industry: "Data Science",
        details: "An introductory course on data science and analytics.",
        startDate: "2024-10-01",
        endDate: "2025-01-01",
        proficiencyLevel: "Intermediate",
        skillsNeeded: "Python, Statistics",
        image: "https://example.com/images/datascience.jpg",
        enrollment: 85,
    }, {
        id: 3,
        name: "Programming",
        industry: "Computer Science",
        details: "Learn the basics of programming using Python.",
        startDate: "2024-09-01",
        endDate: "2024-12-01",
        proficiencyLevel: "Beginner",
        skillsNeeded: "Basic Computer Knowledge",
        image: "https://example.com/images/programming.jpg",
        enrollment: 200,
    },
    {
        id: 4,
        name: "Programming",
        industry: "Computer Science",
        details: "Learn the basics of programming using Python.",
        startDate: "2024-09-01",
        endDate: "2024-12-01",
        proficiencyLevel: "Beginner",
        skillsNeeded: "Basic Computer Knowledge",
        image: "https://example.com/images/programming.jpg",
        enrollment: 120,
    },
];

const CoursesTable = () => {
    const chartData = {
        labels: coursesData.map((course) => course.name),
        datasets: [
            {
                label: 'Enrollment',
                data: coursesData.map((course) => course.enrollment),
                backgroundColor: '#BAE5F5',
            },
        ],
    };

    return (
        <div className="group-content-courses">
            <div className="user-details">
                <h2>Courses overview</h2>
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>Course Name</th>
                            <th>Industry</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Proficiency Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coursesData.map((course) => (
                            <tr key={course.id}>
                                <td>{course.name}</td>
                                <td>{course.industry}</td>
                                <td>{course.startDate}</td>
                                <td>{course.endDate}</td>
                                <td>{course.proficiencyLevel}</td>
                                <td><IoPencilOutline /> <IoTrashBin /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="chart-container">
                <Bar data={chartData} options={{ maintainAspectRatio: false }} />
            </div>
        </div>
    );
};

export default CoursesTable;
