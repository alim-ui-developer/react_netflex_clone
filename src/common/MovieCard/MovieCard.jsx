import React from 'react';
import './MovieCard.style.css';
import { useMovieGerneQuery } from '../../hooks/useMovieGenre';

const transformToDateForm = (date) => {
	let yyyy = date.substring(0, 4);
	let mm = date.substring(5, 7);
	let dd = date.substring(8, 10);
    
	return `${yyyy}년 ${(mm < 10 ? mm.slice(1,2) : mm)}월 ${(dd < 10 ? dd.slice(1,2) : dd)}일`;
}

const MovieCard = ({movie, rank, isUpComing}) => {
  const {data: genreData} = useMovieGerneQuery(); // data:이름 << data를 이름으로 재정의하겠다는 뜻
  // 장르의 id값과 key값을 맵핑시켜준다
  const showGenre = (genreIdList) => {
    if(!genreData) return []; // 장르 데이터가 없으면 보여주지 않는다
    const genreNameLiist = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    })

    return genreNameLiist;
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
              <p>⭐{movie.vote_average.toFixed(1)}</p>
              <p>🙂{Math.round(movie.popularity).toLocaleString('ko-KR')}</p>
            </>
          }
          {movie.adult && 
            <p className='adultlabel'>청소년관람불가</p>
          }
        </div>
        <ul className='genre'>
          {showGenre(movie.genre_ids).map((id) => 
            <li>#{id}</li>
          )}
        </ul>
        
      </div>
    </div>
  )
}

export default MovieCard