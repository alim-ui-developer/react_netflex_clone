import React from 'react'
import "./MovieSliderBackdropType.style.css";
import MovieCardBackdropType from '../MovieCard/MovieCardBackdropType';

const MovieSliderBackdropType = ({ title, movies, count }) => {
  return (
    <section className="MovieSliderBackdropType">
        <h3>{title}</h3>
        <ul>
          {movies.map((movie, index) => 
            <MovieCardBackdropType key={movie.id} movie={movie} index={index} count={count} />
          )}
        </ul>
    </section>
  )
}

export default MovieSliderBackdropType