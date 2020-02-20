import React, { useState, useEffect } from "react";

const initialMovie = {
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
}

const UpdateMovieForm = props => {
    const [updateMovie, setUpdateMovie] = useState(initialMovie);

    useEffect(() => {
        const selectedMovie = props.list.find(selection => {
            return `${selection.id}` === props.match.params.id;
        });
        // console.log(selectedMovie);
        if (selectedMovie) {
            setUpdateMovie(selectedMovie);
        }
    }, [props.list, props.match.params.id]);

    const changeHandler = e => {
        setUpdateMovie({
            ...updateMovie, [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h2>Edit Movie</h2>
            <form>
                <label>Movie Name:</label>
                <input 
                type="text"
                name="movie"
                value={updateMovie.title}
                onChange={changeHandler}
                />
                <label>Director:</label>
                <input 
                type="text"
                name="director"
                value={updateMovie.director}
                onChange={changeHandler}
                />
                <label>Metascore:</label>
                <input 
                type="text"
                name="metascore"
                value={updateMovie.metascore}
                onChange={changeHandler}
                />
                <label>Actors:</label>
                <input 
                type="text"
                name="actors"
                value={updateMovie.stars}
                onChange={changeHandler}
                />
                <button>Submit</button>      
            </form>
        </div>
    )
}

export default UpdateMovieForm;