import React from 'react';
import { usePopuralMoviesQuery } from '../../../../hooks/usePopularMovies';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MovieSliderPosterType from '../../../../common/MovieSlider/MovieSliderPosterType';
import { popularMovieresponsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopuralMoviesQuery();

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
    <MovieSliderPosterType title={'놓칠 수 없는 요즘 핫한 영화🔥'} movies={data.results} isRank={true} isUpComing={false} responsive={popularMovieresponsive}/>
  )
}

export default PopularMovieSlide;