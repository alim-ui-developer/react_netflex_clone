import React from 'react';
import { FadeLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import { useNowPlayingMoviesQuery } from '../../../../hooks/useNowPlayingMovies';

const NowPlayingMovies = () => {
  const { data, isLoading, isError, error } = useNowPlayingMoviesQuery();
  
  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  console.log("MMM", data);

  return (
    <>
      <p>현재 상영중</p>
    </>
  )
}

export default NowPlayingMovies