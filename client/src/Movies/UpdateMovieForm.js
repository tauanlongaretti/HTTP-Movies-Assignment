
import React, { useState, useEffect } from "react";
import axios from "axios";

const initialMovie = {
  id: "",
  title: "",
  director: "",
  metascore: "",
  stars: []
};

const UpdateMovieForm = props => {
  const [updateMovie, setUpdateMovie] = useState(initialMovie);

  useEffect(() => {
    const selectedMovie = props.movie.find(selection => {
      return `${selection.id}` === props.match.params.id;
    });
    console.log(props.match.params.id);
    if (selectedMovie) {
      setUpdateMovie(selectedMovie);
    }
  }, [props.movie, props.match.params.id]);

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;

    setUpdateMovie({
      ...updateMovie,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
      e.preventDefault();
      axios
        .put(`http://localhost:5000/api/movies/${updateMovie.id}`, updateMovie)
        .then(res => {
            console.log(res);
            props.editMovie(res.data);
        })
        .catch(err => {
            console.log(err)
        })
        props.history.push("/")
  };

  return (
    <div>
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>Movie Name: </label>
        <input
          type="text"
          name="title"
          value={updateMovie.title}
          onChange={changeHandler}
        />
        <label>Director: </label>
        <input
          type="text"
          name="director"
          value={updateMovie.director}
          onChange={changeHandler}
        />
        <label>Metascore: </label>
        <input
          type="text"
          name="metascore"
          value={updateMovie.metascore}
          onChange={changeHandler}
        />
        <label>Actors: </label>
        <input
          type="text"
          name="stars"
          value={updateMovie.stars}
          onChange={changeHandler}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateMovieForm;

