import React from 'react';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MovieSliderPosterType from '../../../../common/MovieSlider/MovieSliderPosterType';
import { topRatedMovieresponsive } from '../../../../constants/responsive';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

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
    <MovieSliderPosterType title={'세월을 뛰어넘는 명작✨'} movies={data.results} isRank={false} isUpComing={false} responsive={topRatedMovieresponsive}/>
  )
}

export default TopRatedMovieSlide;