import React from 'react';
import './MovieCard.style.css';
import { useMovieGerneQuery } from '../../hooks/useMovieGenre';
import transformToDateForm from '../../utils/transformToDateForm';

const MovieCard = ({movie, rank, isUpComing}) => {
  const {data: genreData} = useMovieGerneQuery(); // data:이름 << data를 이름으로 재정의하겠다는 뜻
  
  // 장르의 id값과 key값을 맵핑시켜준다
  const showGenre = (genreIdList) => {
    if(!genreData) return []; // 장르 데이터가 없으면 보여주지 않는다
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    })

    return genreNameList;
  }

  return (
    <div className='movieCard' style={{ backgroundImage:`url(https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path})` }}>
      {rank && 
        <h4 className='ranking'>{rank}</h4>
      }
      <div className='overlay'>
        <h5>{movie.title}</h5>
        <div className="info">
          {isUpComing ? 
            <p>{transformToDateForm(movie.release_date)} 개봉</p> :
            <>
              {movie.vote_average > 0 && <p>⭐{movie.vote_average.toFixed(1)}</p>}
              <p>🙂{Math.round(movie.popularity).toLocaleString('ko-KR')}</p>
            </>
          }
          {movie.adult && 
            <p className='adultlabel'>청소년관람불가</p>
          }
        </div>
        <ul className='genre'>
          {showGenre(movie.genre_ids).map((id) => 
            <li key={id}>#{id}</li>
          )}
        </ul>
        
      </div>
    </div>
  )
}

export default MovieCard