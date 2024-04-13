import React from 'react';
import './MovieTrailer.style.css';
import { useKoreanMovieTraileroQuery, useEnglishMovieTraileroQuery } from '../../../../hooks/useMovieTrailer';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MovieTrailerModalContents from './MovieTrailerModalContents';

const MovieTrailerModals = (movieId) => {
  const { data:korData, isLoading:korIsLoading, isError: korIsError, error:korError } = useKoreanMovieTraileroQuery(movieId);
  const { data:engData, isLoading:engIsLoading , isError: engIsError, error: engError } = useEnglishMovieTraileroQuery(movieId);

  if(engIsLoading || korIsLoading) {
    return (
      <div className="loadingSpinner">
        <CircularProgress sx={{color: '#795dfb', animationDuration: '600ms'}} />
      </div>
    )
  }
  if(engIsError || korIsError) {
    return <Alert severity="error">{korError.message}</Alert>
  }

  return (
    <aside class="MovieTrailerModals">
      <h4 className='screen_out'>관련 영상</h4>
      <div>
        {korData.results.length > 0 && korData.results[0].official && 
          <MovieTrailerModalContents data={korData.results[0]} lang={'kor'} buttonText={'한국어'}/>
        }
        {engData.results.length > 0 && engData.results[0].official && 
          <MovieTrailerModalContents data={engData.results[0]} lang={'eng'} buttonText={'global'}/>
        }
      </div>
    </aside>
  )
}

export default MovieTrailerModals