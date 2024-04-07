import React from 'react';
import './PopularMovieSlide.style.css';
import { FadeLoader } from 'react-spinners';
import { Container }  from 'react-bootstrap';
import { usePopuralMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1401 },
    items: 7,
    slidesToSlide: 2
  },
  tablet: {
    breakpoint: { max: 1400, min: 769 },
    items: 4,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 768, min: 577 },
    items: 2,
    slidesToSlide: 1
  },
  s_mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopuralMoviesQuery();

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  console.log(data);

  return (
    <section className="popularMoviesSlide">
      <Container fluid>
        <h3>놓칠 수 없는 요즘 핫한 영화🔥</h3>
      </Container>
      <Carousel
        infinite={true}
        autoPlay={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
        dotListClass="custom-dot-list-style"
      >
        {data.results.map((movie, index) => (
          <MovieCard key={movie.title} movie={movie} rank={index}/>
        ))}
      </Carousel>
    </section>
  )
}

export default PopularMovieSlide;