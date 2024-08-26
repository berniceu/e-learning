import React from 'react';
import './SessionList.scss';

const SessionList = () => {
    const sessions = [
        { date: "17 Jun 2024", time: "10:00 AM", duration: "2 hours" },
        // Add more sessions as needed
    ];

    return (
        <div className="session-list">
            <h2>Add new session</h2>
            {sessions.map((session, index) => (
                <div key={index} className="session">
                    <h3>Monday session</h3>
                    <p>{session.date} {session.time}</p>
                    <p>{session.duration}</p>
                </div>
            ))}
        </div>
    );
};

export default SessionList;
