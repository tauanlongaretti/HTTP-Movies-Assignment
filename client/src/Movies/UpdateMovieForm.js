import React from "react";

const UpdateMovieForm = () => {
    return (
        <form>
            <label>Movie Name:</label>
            <input 
              type="text"
              name="movie"
            />
            <label>Director:</label>
            <input 
              type="text"
              name="director"
            />
            <label>Metascore:</label>
            <input 
              type="text"
              name="metascore"
            />
            <label>Actors:</label>
            <input 
              type="text"
              name="actors"
            />
            <button>Submit</button>      
        </form>
    )
}

export default UpdateMovieForm;