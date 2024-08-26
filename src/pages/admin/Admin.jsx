import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import CoursesTable from "../../components/admin/CoursesAdmin"
import Footer from "../../components/Footer";
import '../../styles/admin/admin.css'
import { IoPerson, IoTrashBin, IoPencilOutline } from 'react-icons/io5';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


/* display users */
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
                    <h2>{title}</h2>
                    {users.length > 0 ? (
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Date Created</th>
                                    <th>Registered as</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.dateCreated}</td>
                                        <td>{user.registered}</td>
                                        <td><IoPencilOutline /> <IoTrashBin /></td>
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
        { id: 1, name: 'Cilian Murphy', email: 'cimurph@gmail.com', password: '******', dateCreated: '2024-08-01', status: 'active', registered: 'Instructor' },
        { id: 2, name: 'Junior Keza', email: 'jun1or34@gmail.com', password: '******', dateCreated: '2024-07-20', status: 'enrolled', registered: 'Student' },
        { id: 3, name: 'Michael Jackson', email: 'michaeljk@gmail.com', password: '******', dateCreated: '2024-06-15', status: 'inactive', registered: 'Student' },
        { id: 4, name: 'Scarlett Jackson', email: 'sc@rlettt@gmail.com', password: '******', dateCreated: '2024-08-10', status: 'active', registered: 'Instructor' },
        { id: 5, name: 'David Manzi', email: 'davidmanzi@gmail.com', password: '******', dateCreated: '2024-05-05', status: 'inactive', registered: 'Student' }
    ]);
    const chartData = createPieChartData(users);
    return (
        <div className="users-list-container">
            <h1>Dashboard</h1>
            <UserGroupWrapper title="Users Overview" chartData={chartData} users={users} />
        </div>
    );
};









const Admin = () => {
    return (
        <>
            <AdminHeader />
            <UsersList />
            <div className="users-list-container">
                <div className="user-group-wrapper">
                    <CoursesTable />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Admin;