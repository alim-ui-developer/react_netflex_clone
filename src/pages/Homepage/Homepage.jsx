import React from 'react';
import TopBanner from './components/Banner/TopBanner';
import IntroBanner from './components/Banner/IntroBanner';
import PopularMovieSlide from './components/MainMovieSliders/PopularMovieSlide';
import TopRatedMovieSlide from './components/MainMovieSliders/TopRatedMoviesSlide';
import UpComingMoviesSlide from './components/MainMovieSliders/UpComingMoviesSlide';

// 1. 배너
//    - popular 영화를 들고와서 첫번째 아이템을 보여주자!
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <TopBanner />
      <IntroBanner />
      <PopularMovieSlide />
      <TopRatedMovieSlide />
      <UpComingMoviesSlide />
    </div>
  )
}

export default Homepage