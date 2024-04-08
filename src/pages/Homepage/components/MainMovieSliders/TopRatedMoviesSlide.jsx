import React from 'react';
import { FadeLoader } from 'react-spinners';
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { topRatedMovieresponsive } from '../../../../constants/responsive';

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  return (
    <MovieSlider title={'세월을 뛰어넘는 명작✨'} movies={data.results} isRank={false} isUpComing={false} responsive={topRatedMovieresponsive}/>
  )
}

export default TopRatedMovieSlide;