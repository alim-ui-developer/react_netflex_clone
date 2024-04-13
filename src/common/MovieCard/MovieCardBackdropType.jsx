import React from 'react'
import './MovieCardBackdropType.style.css';
import { isRouteErrorResponse, useNavigate } from 'react-router-dom';

const MovieCardBackdropType = ({movie, index, count}) => {
  // 각 영화의 id에 맞는 상세 페이지로 이동
  const navigate = useNavigate();
  const goToMovieDetailPage = (movieId) => {
    navigate(`/movies/${movieId}`);
  }

  return (
    <>
      {movie.backdrop_path && index < count && 
        <li 
          key={movie.id}
          className='MovieCardBackdropType'
          onClick={() => goToMovieDetailPage(movie.id)}
          style={{
            backgroundImage:`url("https://media.themoviedb.org/t/p/w1280_and_h720_bestv2/${movie.backdrop_path}")`
          }}
        >
          <h4>{movie.title}</h4>
        </li>
      }
    </>
  )
}

export default MovieCardBackdropType