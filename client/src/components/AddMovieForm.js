import React, { useState } from "react";

const AddMovieForm = () => {

    const [newMovie, setNewMovie] = useState({
        title:"",
        director: "",
        genre: "",
        metascore: 0,
        description: ""
    })

    const handleChange = e => {
        
    }

    const handleSubmit = e => {

    }

    return (
    <>
    <form onSubmit={handleSubmit} >
        <input type="text" value={newMovie.title} name="title" onChange={handleChange} />
        <input type="text" value={newMovie.director} name="director" onChange={handleChange} />
        <input type="text" value={newMovie.genre} name="genre" onChange={handleChange} />
        <input type="number" value={newMovie.metascore} name="metascore" onChange={handleChange} />
        <input type="text" value={newMovie.description} name="description" onChange={handleChange} />
        <button>Go Back</button>
        <button>Add Movie</button>
    </form>
    </>
    );
}
