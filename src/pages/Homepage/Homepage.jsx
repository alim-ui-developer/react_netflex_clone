import React from 'react';
import TopBanner from './components/Banner/TopBanner';
import IntroBanner from './components/Banner/IntroBanner';
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide';
import NowPlayingMovies from './components/NowPlayingMovies/NowPlayingMovies';

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
      <NowPlayingMovies />
    </div>
  )
}

export default Homepage