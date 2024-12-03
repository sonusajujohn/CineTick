import React, { useState } from 'react';
import './MovieDetails.css';
import { assets } from '../../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';

function MovieDetails() {

    const navigate = useNavigate();

    const location = useLocation();

    const [liked, setLiked] = useState(false); // State to track if the Like button is clicked
    const [disliked, setDisliked] = useState(false);

    const handleLike = () => setLiked(!liked);

    const handleDislike = () => setDisliked(!disliked);

    const movie = location.state?.movie;


    const gototrailer = () => {

        window.location.href="https://www.youtube.com/watch?v=EvFVXlalmXg";     

    };

    const gotoseats = () => {

        navigate('/seatselection');
    }

  return (
    <div className="movie-details-container">
      <div className="movie-header">
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>{movie.censored}• 2 hrs 30 mins</p>
          <p>Drama, Crime, Thriller</p>
          <p>{movie.lang}</p> 
          <button className="watch-trailer-button" onClick={gototrailer}>Watch Trailer</button>
        </div>
        <div className="movie-rating">
           <img src={assets[`movie${movie.id}`]} alt={movie.title} className="movie-poster" />
          <p>❤️ {movie.rating}% Liked this movie</p>
        </div>
      </div>

      <div className="movie-options">
        <button
        className={`like-button ${liked ? 'selected' : ''}`} // Apply the 'selected' class if liked
        onClick={handleLike}> ❤️ Like</button>
        <button 
        className={`dislike-button ${disliked ? 'selected' : ''}`} // Apply the 'selected' class if liked
        onClick={handleDislike}
        > 💔 Dislike</button>
        <p className="location">📍 Trivandrum</p>
      </div><br />

      <div className="showtimes">
        <h3>CineTick Cinemas Cinionic · RGB Screen 4K · Dolby Atmos </h3><br /> 
        <div className="showtime-buttons">
          <button onClick={gotoseats} className="showtime-button">11:00 AM</button>
          <button onClick={gotoseats} className="showtime-button">02:30 PM</button>
          <button onClick={gotoseats} className="showtime-button">06:30 PM</button>
          <button onClick={gotoseats} className="showtime-button">10:00 PM</button>
        </div><br /><br />
      </div>
    </div>
  );
}

export default MovieDetails;