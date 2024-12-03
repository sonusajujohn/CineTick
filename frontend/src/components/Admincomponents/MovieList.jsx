import React, { useState } from 'react';
import './MovieList.css';
import { assets } from '../../assets/assets';

const initialMovies = [
    { id: 1, title: 'I Am Kathalan', censored: 'U/A', lang: 'Malayalam', rating: 82, image: 'image-url-1' },
    { id: 2, title: 'Amaran', censored: 'U/A', lang: 'Tamil', rating: 94, image: 'image-url-2' },
    { id: 3, title: 'Lucky Baskar', censored: 'U/A', lang: 'Malayalam', rating: 94, image: 'image-url-3' },
    { id: 4, title: 'ARM', censored: 'U/A', lang: 'Malayalam', rating: 88, image: 'image-url-4' },
    { id: 5, title: 'Bheeshma Parvam', censored: 'U/A', lang: 'Malayalam', rating: 80, image: 'image-url-5' },
    { id: 6, title: 'BRAMAYUGAM', censored: 'U/A', lang: 'Malayalam', rating: 79, image: 'image-url-6' },
    { id: 7, title: 'KGF 2', censored: 'U/A', lang: 'Kannada', rating: 82, image: 'image-url-7' },
    { id: 8, title: 'Pani', censored: 'U/A', lang: 'Malayalam', rating: 86, image: 'image-url-8' }
];

const MovieList = ({ onUpdate, onDelete }) => {
    const [movies, setMovies] = useState(initialMovies);
    const [status, setStatus] = useState('Now showing');

    const handleStatusChange = (id, newStatus) => {
        setMovies(movies.map(movie => (movie.id === id ? { ...movie, status: newStatus } : movie)));
    };

    return (
        <div className="movie-list">
            <h2>Movies List</h2>
            <div className="movie-table">
                {movies.map((movie) => (
                    <div className="movie-row" key={movie.id}>
                        <img style={{width: "150px",height: "180px",borderRadius:"20px",marginLeft:"15px"}} src={assets[`movie${movie.id}`]} alt={movie.title} className="movie-image" /> 
                        <div className="movie-title">
                            <h3>Movie Name</h3>
                            {movie.title}</div>
                        <div className="movie-lang">
                            <h3>Language</h3>
                            {movie.lang}</div>
                        <button className="edit-button" onClick={() => onUpdate(movie.id)}>Edit</button>
                        <button className="delete-button" onClick={() => onDelete(movie.id)}>Delete</button>
                        <select
                            className="status-select"
                            value={movie.status || status}
                            
                            onChange={(e) => handleStatusChange(movie.id, e.target.value)}
                        >   <h3>Status</h3>
                            <option value="now showing">Now Showing</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="stopped showing">Stopped Showing</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
