import React from 'react'
import './MovieDetailPage.style.css';
import { FadeLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import { useMovieDetailPagesQuery } from '../../hooks/useMovieDetailPages';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MovieDetailInfo from './components/MovieDetailInfo';
import Recommendations from './components/Recommendations';

const MovieDetailPage = () => {
  const params = useParams();
  const movieId = params.id;
  const { data, isLoading, isError, error } = useMovieDetailPagesQuery({movieId});

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <Container fluid>
      <section className='movieDetailPageArea'>
        <MovieDetailInfo movie={data} />
        <Recommendations movie={data} />
        {/* 리뷰 - 더보기, 접기 기능 */}
      </section>    
    </Container>
  )
}

export default MovieDetailPage