import React from 'react';
import { FadeLoader } from 'react-spinners';
import { usePopuralMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { popularMovieresponsive } from '../../../../constants/responsive';

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopuralMoviesQuery();

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  return (
    <MovieSlider title={'놓칠 수 없는 요즘 핫한 영화🔥'} movies={data.results} isRank={true} isUpComing={false} responsive={popularMovieresponsive}/>
  )
}

export default PopularMovieSlide;