import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import Footer from "../../components/Footer";
import '../../styles/admin/admin.css'
import { IoPerson } from 'react-icons/io5';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);
const createPieChartData = (users) => {
    const activeUsers = users.filter(user => user.status === 'active').length;
    const inactiveUsers = users.filter(user => user.status === 'inactive').length;
    const enrolledUsers = users.filter(user => user.status === 'enrolled').length;
    return {
        labels: ['Active Users', 'Inactive Users', 'Enrolled Users'],
        datasets: [
            {
                data: [activeUsers, inactiveUsers, enrolledUsers],
                backgroundColor: ['#CCEFBF', '#E1D2FF', '#BAE5F5'],
                hoverBackgroundColor: ['#38a169', '#e53e3e', '#3182ce'],
            },
        ],
    };
};
function UserGroupWrapper({ title, chartData, users }) {
    return (
        <div className="user-group-wrapper">
            <div className="group-content">
                <div className="chart-container">
                    <Pie data={chartData} />
                </div>
                <div className="user-details">
                    <h3 className="title">{title}</h3>
                    {users.length > 0 ? (
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Date Created</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.dateCreated}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="no-users">No users found in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export const UsersList = () => {
    const [users] = useState([
        { id: 1, name: 'Cilian Murphy', email: 'cimurph@gmail.com', password: '******', dateCreated: '2024-08-01', status: 'active' },
        { id: 2, name: 'Junior Keza', email: 'jun1or34@gmail.com', password: '******', dateCreated: '2024-07-20', status: 'enrolled' },
        { id: 3, name: 'Michael Jackson', email: 'michaeljk@gmail.com', password: '******', dateCreated: '2024-06-15', status: 'inactive' },
        { id: 4, name: 'Scarlett Jackson', email: 'sc@rlettt@gmail.com', password: '******', dateCreated: '2024-08-10', status: 'active' },
        { id: 5, name: 'David Manzi', email: 'davidmanzi@gmail.com', password: '******', dateCreated: '2024-05-05', status: 'inactive' }
    ]);
    const chartData = createPieChartData(users);
    return (
        <div className="users-list-container">
            <UserGroupWrapper title="Users Overview" chartData={chartData} users={users} />
        </div>
    );
};






export const CoursesTable = ({ setSelectedCourse, setCoursesTable }) => {
    const Courses = [
        { id: 1, name: "group1" },
        { id: 2, name: "group1" },
    ];
    const getFilteredCourses = () => {
        return Courses.filter((course) => { });
    };
    const filteredCourses = getFilteredCourses();
    return (
        <>
            <div className="users">
                <h2>users</h2>
            </div>
        </>
    );
};




const Admin = () => {
    return (
        <>
            <AdminHeader />
            <UsersList />
            <Footer />
        </>
    )
}

export default Admin;