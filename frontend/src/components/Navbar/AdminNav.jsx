import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const AdminNav = () => {
    const navi = useNavigate();

    const logout = () => {
        navi('/');
    };

    const homenav = () =>{
        navi('/');
    }

    return (
        <div className='Nav'>
            <img onClick={()=>{homenav}} style={{width:"80px",height:"80px"}} src={assets.logo} alt="logo" />
            <div style={{ marginLeft: "-750px",
                          fontSize: "2.6vw",
                          fontWeight: "900",
                          fontFamily: "sans-serif",
                           color: "tomato"
                        }}
                        >CineTick</div>

            <div className="Navright">
                <img id='img' src={assets.search} alt="searchicon" />
                <button onClick={logout}>
                    <img id="icon" src={assets.Signout} alt="user icon" />
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default AdminNav;
