import React from 'react';
import './DiscoverMovieSlide.style.css';
import { FadeLoader } from 'react-spinners';
import { useMovieDiscoverQuery } from '../../../../hooks/useMovieDiscover';
import Alert from 'react-bootstrap/Alert';
import transformToDateForm from '../../../../utils/transformToDateForm';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { topRatedMovieresponsive } from '../../../../constants/responsive';

const DiscoverMovieSlide = ({genreId, title}) => {
  const { data, isLoading, isError, error } = useMovieDiscoverQuery(true, genreId);

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

 const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    },
  };

  console.log(data.results)

  return (
    <MovieSlider title={title} movies={data.results} isRank={false} isUpComing={false} responsive={topRatedMovieresponsive}/>
    // ~~디자인 새로 작업 중~~
    // <Carousel
    //   infinite={true}
    //   autoPlay={true}
    //   centerMode={true}
    //   autoPlaySpeed={5000}
    //   transitionDuration={1000}
    //   itemClass="movie-slider p-1"
    //   containerClass="carousel-container"
    //   responsive={responsive}
    //   dotListClass="custom-dot-list-style"
    // >
    //   {data.results.map((movie, index) => (
    //     <div key={movie.id} className='discoverMovieSlide' style={{ backgroundImage:`url(https://media.themoviedb.org/t/p/w1920_and_h800_bestv2/${movie.backdrop_path})` }}>
    //       <h5>{movie.title}</h5>
    //       <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`} alt="" />
    //       <p>{transformToDateForm(movie.release_date)} 개봉</p>
    //       {movie.vote_average > 0 && <p>⭐{movie.vote_average.toFixed(1)}</p>}
    //       <p>🙂{Math.round(movie.popularity).toLocaleString('ko-KR')}</p>
    //       <p>{movie.overview}</p>
    //     </div>
    //   ))}
    // </Carousel>
  )
}

export default DiscoverMovieSlide;