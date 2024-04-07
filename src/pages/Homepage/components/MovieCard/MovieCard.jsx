import React from 'react';
import {Badge} from 'react-bootstrap';
import './MovieCard.style.css';

const MovieCard = ({movie, rank}) => {
  return (
    <div 
      className='movieCard'
      style={{ backgroundImage:`url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path})` }}
    >
      <h4>{rank + 1}</h4>
      <div className='overlay'>
        <h5>{movie.title}</h5>
        <ul>
          {movie.genre_ids.map((id) => 
            <li>
              <Badge bg="secondary" key={`${movie.id} genre`}>{id}</Badge>
            </li>
          )}
        </ul>
        <p>{movie.vote_average}</p>
        <p>{movie.popularity}</p>
        <p>{movie.adult ? '청소년관람불가' : ""}</p>
      </div>
    </div>
  )
}

export default MovieCard