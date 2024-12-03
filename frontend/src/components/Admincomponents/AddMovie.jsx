import React, { useState } from 'react';
import './AddMovie.css';
import axios from 'axios';

const AddMovie = () => {
    const [movieData, setMovieData] = useState({
        title: '',
        language: 'Malayalam',
        censored: 'U',
        rating: 0,
        runtime: '',
        trailerLink: '',
        description: ''
    });

    const [poster,setPoster]=useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovieData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle image file selection
    const handleFileChange = (e) => {
        setMovieData(prevState => ({
            ...prevState,
            poster: e.target.files[0]
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', movieData.title);
        formData.append('language', movieData.language);
        formData.append('censored', movieData.censored);
        formData.append('rating', movieData.rating);
        formData.append('runtime', movieData.runtime);
        formData.append('trailerLink', movieData.trailerLink);
        formData.append('description', movieData.description);
        formData.append('poster', movieData.poster);
        const response = await axios.post('http://localhost:5000/api/addmovies', formData);
        if(response.data.success){
            setMovieData({
                title: '',
                language: 'Malayalam',
                censored: '',
                rating: 0,
                runtime: '',
                trailerLink: '',
                description: ''
            })
            setPoster(false);
            alert("Movie Added Successfully")
        }else{
            alert("Movie Post Operation Failed")
        }
    };

    return (
        <div className="add-movie-container">
            <h2>Add New Movie</h2>
            <form onSubmit={handleSubmit} className="add-movie-form">
                <div className="form-group">
                    <label>Movie Poster</label>
                    <input type="file" name="poster" onChange={handleFileChange} required />
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" value={movieData.title} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Movie Rating</label>
                    <input type="text" name="rating" value={movieData.rating} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Language</label>
                    <select name="language" value={movieData.language} onChange={handleChange}>
                        <option value="Malayalam">Malayalam</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Kannada">Kannada</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Censored</label>
                    <select name="rating" value={movieData.rating} onChange={handleChange}>
                        <option value="U">U</option>
                        <option value="U/A">U/A</option>
                        <option value="A">A</option>
                        <option value="R">R</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Runtime (in hours)</label>
                    <input type="number" name="runtime" value={movieData.runtime} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Trailer Link</label>
                    <input type="url" name="trailerLink" value={movieData.trailerLink} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Movie Description</label>
                    <textarea name="description" value={movieData.description} onChange={handleChange} maxLength="100"></textarea>
                </div>

                <button type="submit" className="submit-button">Add Movie</button>
            </form>
        </div>
    );
};

export default AddMovie;
