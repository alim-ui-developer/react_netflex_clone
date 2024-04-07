import React from 'react'
import './Banner.style.css';
import { usePopuralMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopuralMoviesQuery();
  console.log(data);
  if(isLoading) {
    return <h1>Loading...</h1>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <div>Banner</div>
  )
}

export default Banner