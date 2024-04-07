import React from 'react';
import './PopularMovieSlide.style.css';
import { FadeLoader } from 'react-spinners';
import { usePopuralMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
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
    <section>
      <h3>놓칠 수 없는 요즘 핫한 영화🔥</h3>
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