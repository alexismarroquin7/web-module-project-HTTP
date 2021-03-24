import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./AddMovieForm.css"

const AddMovieForm = (props) => {

    const { push } = useHistory();

    const [newMovie, setNewMovie] = useState({
        title:"",
        director: "",
        genre: "",
        metascore: 0,
        description: "",
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setNewMovie({
            ...newMovie,
            [name]: value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(newMovie.title === "" | newMovie.director === "" | newMovie.metascore === "") return;
        axios
            .post(`http://localhost:5000/api/movies`, newMovie)
            .then(res => {
                props.setMovies(res.data);
                push('/movies')
            })
            .catch(err => {
                console.log(err)
            });

    }

    return (
    <>
    <form onSubmit={handleSubmit} className="AddMovieForm" >
        <label>Title:
        <input type="text" value={newMovie.title} name="title" onChange={handleChange} />
        </label><br />
        <label>Director:
        <input type="text" value={newMovie.director} name="director" onChange={handleChange} />
        </label><br />
        <label>Genre:
        <input type="text" value={newMovie.genre} name="genre" onChange={handleChange} />
        </label><br />
        <label>Metascore:
        <input type="number" value={newMovie.metascore} name="metascore" onChange={handleChange} />
        </label><br />
        <label>Description:
        <textarea type="text" value={newMovie.description} name="description" onChange={handleChange} />
        </label><br />
        <div>
            <Link to="/movies" ><button>Go Back</button></Link>
            <button>Add Movie</button>
        </div>
    </form>
    </>
    );
}

export default AddMovieForm;
