import React, {useState} from 'react';
import {MOVIES_DATA} from "./MovieData";
import Movie from "./Movie";


const MovieList = () => {
    const [movies, setMovies] = useState(MOVIES_DATA);
    return (
        <div>
            {
                movies.map(movie => (
                        <Movie key={movie.id} {...movie}/>
                    )
                )
            }
        </div>
    );
}

export default MovieList;