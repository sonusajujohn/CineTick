import React, { useState } from 'react';
import AdminNav from '../../components/Navbar/AdminNav'
import MovieList from '../../components/Admincomponents/MovieList';
import './AdminDashboard.css'
import AddMovie from '../../components/Admincomponents/AddMovie';
import UserList from '../../components/Admincomponents/Userlist';
import { assets } from '../../assets/assets';

const AdminDashboard = () => {
  const [currentView, setCurrentView] = useState('movieList'); // Set initial view to movieList
  
  return (
    <>
      <AdminNav/>
      <div className="admin-dashboard">
        <div className="sidebar">
          <h3>ADMIN DASHBOARD</h3>

          <button onClick={() => setCurrentView('movieList')}>
            <img src={assets.movielist} alt="movielisticon" className='sidebar-icon' /> 
             Movies List
          </button>

          <button onClick={() => setCurrentView('addNewMovie')}>
            <img  src={assets.addmovie} alt="addmovieicon" className='sidebar-icon' />
            Add Movie
          </button>

          <button onClick={() => setCurrentView('userList')}>
            <img src={assets.userlist} alt="userlisticon" className='sidebar-icon' />
            Users List
          </button>

        </div>
        
        <div className="main-content">
          
          {currentView === 'movieList' && <MovieList />} 
          {currentView === 'addNewMovie' && <AddMovie />}
          {currentView === 'userList' && <UserList />}

        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
