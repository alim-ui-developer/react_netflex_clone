import React from 'react'
import { Link } from 'react-router-dom'

const MovieDetailInfo = ({ movie }) => {
  console.log(movie)
  return (
    <article className="movieInfoBox">
      <p>{movie.tagline}</p>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>
        {movie.genres && movie.genres.map((genre, index) => (
          <i key={`genre${index}`}>{genre.name}</i>
        ))}
      </p>
      <p>{movie.budget && movie.budget.toLocaleString('ko-KR')}</p>
      <p>{movie.runtime}</p>
      {new Date(movie.release_date) < new Date() ? 
        <p>총 {movie.vote_count}명의 관람객들이 평균 <em>{movie.vote_average.toFixed(1)}점</em>의 점수를 주었어요.</p> :
        <p>이 영화는 아직 관람객 평가가 없어요! 개봉 전이에요☺</p>
      }
      {/* 시리즈물일 경우 노출 */}
      {movie.belongs_to_collection &&
        <aside>
          <h4>{movie.belongs_to_collection.id}</h4>
          <Link path="/">보러가기</Link>
        </aside>
      }
      <button>예고편</button>
      <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path})`} alt="poster" />
      <img src={`https://media.themoviedb.org/t/p/w1920_and_h800_bestv2/${movie.backdrop_path})`} alt="" />
    </article>
  )
}

export default MovieDetailInfo