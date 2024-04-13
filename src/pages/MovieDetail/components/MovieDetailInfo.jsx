import React from 'react';
import './MovieDetailInfo.style.css';
import { useGetMovieCreditsQuery } from '../../../hooks/useGetMovieCredits';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import MovieTrailerModals from './MovieTrailer/MovieTrailerModals';
import Container from '@mui/material/Container';

const MovieDetailInfo = ({ movie }) => {
  const movieId = movie.id;
  const { data: creditsData, isLoading, isError, error } = useGetMovieCreditsQuery({ movieId });

  const getRuntime = (runtime) => {
    const hour = Math.floor(runtime/60);
    const minute = movie.runtime - (hour * 60);
    return `${hour}시간 ${minute}분`
  }

  if(isLoading){
    return (
      <div className="loadingSpinner">
        <CircularProgress sx={{color: '#795dfb', animationDuration: '600ms'}} />
      </div>
    )
  }
  if(isError){
    return <Alert severity="error">{error.message}</Alert>
  }

  return (
    <>
      {movie && 
        <article className="MovieDetailInfo">
          <Container maxWidth="xl">
            <div className='flexBox'>
              <p className="poster">
                <img src={`https://media.themoviedb.org/t/p/original/${movie.poster_path})`} alt="" />
              </p>
              {movie.tagline && 
                <p className='tagline'>{movie.tagline}</p>
              }
              <h3 className='title'>{movie.title}</h3>
              {movie.genres && 
                <div className='genres'>
                  <h4 className="screen_out">장르</h4>
                  {movie.genres.map((genre, index) => (
                    <Chip key={`genre${index}`} label={genre.name} variant="outlined" />
                  ))}
                </div>
              }
              <article className="creditsBox">
                {creditsData.crew && 
                  <div className='crew'>
                    <h4>감독</h4>
                    <p>{creditsData.crew[0].name}</p>
                  </div>
                }
                {creditsData.cast && 
                  <div className='cast'>
                    <h4>출연</h4>
                    <ul>
                      {creditsData.cast.map((actor, index) => (
                        index < 4 && <li key={actor.id}>{actor.name} ({actor.character})</li>
                      ))}
                    </ul>
                  </div>
                }
              </article>
              {movie.overview && 
                <div className='overview'>
                  <h4 className='screen_out'>줄거리</h4>
                  <p>{movie.overview}</p>
                </div>
              }
              <article className="dataBox">
                {movie.release_date && 
                  <div>
                    <h4 className="screen_out">개봉년도</h4>
                    <p>{movie.release_date.slice(0,4)}</p>
                  </div>
                }
                {movie.runtime && 
                  <div>
                    <h4 className="screen_out">상영시간</h4>
                    <p>{getRuntime(movie.runtime)}</p>
                  </div>
                }
                {movie.vote_count && new Date(movie.release_date) <= new Date() &&
                  <div>
                    <h4>평점</h4>
                    <p>{movie.vote_average.toFixed(1)}</p>
                  </div>
                }
                {movie.budget && 
                  <div >
                    <h4>제작비</h4>
                    <p>{movie.budget > 0 && movie.budget.toLocaleString('ko-KR')}원</p>
                  </div>
                }
              </article>
            </div>
            <MovieTrailerModals movieId={ movieId } />
          </Container>
          {/* background imgage */}
          <div className="bgImage">
            {movie.backdrop_path
              ? <img src={`https://media.themoviedb.org/t/p/original/${movie.backdrop_path})`} alt="" />
              : <img src={`https://media.themoviedb.org/t/p/original/${movie.poster_path})`} alt="" />
            }
            <span className='cover'>&nbsp;</span>
          </div>
        </article>
      }
    </>
  )
}

export default MovieDetailInfo