import React from 'react';
import { FadeLoader } from 'react-spinners';
import { useUpComingMoviesQuery } from '../../../../hooks/useUpComingMovies';
import Alert from 'react-bootstrap/Alert';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { upComingMovieresponsive } from '../../../../constants/responsive';

const UpComingMoviesSlide = () => {
  const { data, isLoading, isError, error } = useUpComingMoviesQuery();

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  return (
    <MovieSlider title={'눈여겨볼 상영 예정작💕'} movies={data.results} isUpComing={true} responsive={upComingMovieresponsive}/>
  )
}

export default UpComingMoviesSlide;