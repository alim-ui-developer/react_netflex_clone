import React from 'react';
import { useUpComingMoviesQuery } from '../../../../hooks/useUpComingMovies';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MovieSliderPosterType from '../../../../common/MovieSlider/MovieSliderPosterType';
import { upComingMovieresponsive } from '../../../../constants/responsive';

const UpComingMoviesSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();

  if(isLoading) {
    return (
      <div className="loadingSpinner">
        <CircularProgress sx={{color: '#795dfb', animationDuration: '600ms'}} />
      </div>
    )
  }
  if(isError) {
    return <Alert severity="error">{error.message}</Alert>
  }

  return (
    <MovieSliderPosterType title={'눈여겨볼 상영 예정작💕'} movies={data.results} isUpComing={true} responsive={upComingMovieresponsive}/>
  )
}

export default UpComingMoviesSlide;