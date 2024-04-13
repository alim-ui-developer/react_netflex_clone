import React from 'react'
import './MovieDetailPage.style.css';
import { useMovieDetailPagesQuery } from '../../hooks/useMovieDetailPages';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import MovieDetailInfo from './components/MovieDetailInfo';
import CollectionLink from './components/CollectionLink';
import Similar from './components/Similar';
import Recommendations from './components/Recommendations';
import Reviews from './components/Reviews';

const MovieDetailPage = () => {
  const params = useParams();
  const movieId = params.movieId;
  const { data, isLoading, isError, error } = useMovieDetailPagesQuery({movieId});

  console.log(data)
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
    <section className='movieDetailPage'>
      <MovieDetailInfo movie={data} />
      {data.belongs_to_collection && <CollectionLink movie={data} />} 
      <Container maxWidth="xl">
        <Similar movie={data} />
        <Recommendations movie={data} />
        <Reviews movie={data} />
      </Container>
  </section>

  )
}

export default MovieDetailPage