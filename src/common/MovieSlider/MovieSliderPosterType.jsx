import React from 'react';
import "./MovieSliderPosterType.style.css";
import Container from '@mui/material/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCardPosterType from '../MovieCard/MovieCardPosterType';

const MovieSliderPosterType = ({title, movies, responsive, isRank, isUpComing}) => {
  return (
    <section className="MovieSliderPosterType">
      <Container maxWidth="xl">
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
          <MovieCardPosterType key={movie.title} movie={movie} rank={isRank && (index + 1)} isUpComing={isUpComing}/>
        ))}
      </Carousel>
    </section>
  )
}

export default MovieSliderPosterType