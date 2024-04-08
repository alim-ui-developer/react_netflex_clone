import React from 'react';
import "./MovieSlider.style.css";
import { Container }  from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title, movies, responsive, isRank, isUpComing}) => {
  console.log(movies)
  return (
    <section className="MoviesSlider">
      <Container fluid>
          <h3>{title}</h3>
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
          {movies.map((movie, index) => (
            <MovieCard key={movie.title} movie={movie} rank={isRank && (index + 1)} isUpComing={isUpComing}/>
          ))}
        </Carousel>
    </section>
  )
}

export default MovieSlider