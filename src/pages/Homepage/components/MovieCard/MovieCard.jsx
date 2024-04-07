import React from 'react';
import './MovieCard.style.css';

const MovieCard = ({movie, rank}) => {
  return (
    <div className='movieCard' style={{ backgroundImage:`url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path})` }}>
      <h4 className='ranking'>{rank + 1}</h4>
      <div className='overlay'>
        <h5>{movie.title}</h5>
        <div className="info">
          <p>⭐{movie.vote_average.toFixed(1)}</p>
          <p>🙂{Math.round(movie.popularity).toLocaleString('ko-KR')}</p>
          {movie.adult && 
            <p className='adultlabel'>청소년관람불가</p>
          }
        </div>
        <ul className='genre'>
          {movie.genre_ids.map((id) => 
            <li>
              #{id}
            </li>
          )}
        </ul>
        
      </div>
    </div>
  )
}

export default MovieCard