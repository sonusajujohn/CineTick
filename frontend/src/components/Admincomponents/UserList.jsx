import React, { useState, useEffect } from 'react';
import './UserList.css';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    
    // Fetching users from the database
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Adjusted API endpoint
                const response = await axios.get('http://localhost:5000/auth/users'); 
                setUsers(response.data);
            } catch (error) {
                console.error("Error fetching users", error);
            }
        };
        fetchUsers();
    }, []);

    // Handle delete user (ban user)
    const handleDeleteUser = async (id) => {
        try {
            // Adjusted API endpoint for deleting a user
            await axios.delete(`http://localhost:5000/auth/deleteuser/${id}`); // Adjust the URL if needed
            setUsers(users.filter(user => user._id !== id)); // Update state to remove user
        } catch (error) {
            console.error("Error deleting user", error);
        }
    };

    return (
        <div className="user-list">
            <h2>Users List</h2>
            <div className="user-table">
                {users.map(user => ( user.username != "admin" && (
                    <div className="user-row" key={user._id}>
                        <div className="user-name">
                            <h3>Username</h3>
                            {user.username}</div>
                        <div className="user-email">
                            <h3>Email-ID</h3>
                            {user.email}</div>
                        <button className="delete-button" onClick={() => handleDeleteUser(user._id)}>Ban User</button>
                    </div>
                )))}
            </div>
        </div>
    );
};

export default UserList;
