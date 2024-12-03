import React from 'react';
import './Movies.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Movies = () => {

    const navigate = useNavigate();  

    const movies = [
        { id: 1, title: 'I Am Kathalan', censored: 'U/A', lang: 'Malayalam', rating: 82 },
        { id: 2, title: 'Amaran', censored: 'U/A', lang: 'Tamil', rating: 94 },
        { id: 3, title: 'Lucky Baskar', censored: 'U/A', lang: 'Malayalam', rating: 94},
        { id: 4, title: 'ARM', censored: 'U/A', lang: 'Malayalam', rating: 88 },
        { id: 5, title: 'Bheeshma Parvam', censored: 'U/A', lang: 'Malayalam', rating: 80 },
        { id: 6, title: 'BRAMAYUGAM', censored: 'U/A', lang: 'Malayalam', rating: 79 },
        { id: 7, title: 'KGF 2', censored: 'U/A', lang: 'Kannada', rating: 82 },
        { id: 8, title: 'Pani', censored: 'U/A', lang: 'Malayalam', rating: 86  }
    ];

    const gotomoviedetails = (movie) => {
        navigate('/moviedetails', { state: { movie: { ...movie } } }); 
    };
    
    return (
        <div className="now-showing">
            <div id='nowShowing'>
                <h2>Now Showing</h2> <br />
                <div className="card-container">
                    {movies.map(movie => (
                        <div key={movie.id} className="card">
                            <img src={assets[`movie${movie.id}`]} alt={movie.title} className="card-img" />
                            {movie.rating && (
                                <div className="card-rating">
                                    <span className="heart-icon">❤️</span>{movie.rating}%
                                </div>
                            )}
                            <div className="card-content">
                                <div className="card-title">{movie.title}</div>
                                <div className="card-details">
                                    <span>{movie.censored}</span> • <span>{movie.lang}</span>
                                </div><br />
                                <button onClick={()=>gotomoviedetails ({ ...movie })} className="book-ticket-btn">Book Ticket</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>  
        </div>
    );
};

export default Movies;
