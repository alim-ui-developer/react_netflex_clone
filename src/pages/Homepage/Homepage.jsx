import React from 'react';
import TopBanner from './components/Banner/TopBanner';
import IntroBanner from './components/Banner/IntroBanner';
import DiscoverMovieSlide from './components/MainMovieSliders/DiscoverMovieSlide';
import PopularMovieSlide from './components/MainMovieSliders/PopularMovieSlide';
import TopRatedMovieSlide from './components/MainMovieSliders/TopRatedMoviesSlide';
import UpComingMoviesSlide from './components/MainMovieSliders/UpComingMoviesSlide';
import FunnyVote from './components/Vote/FunnyVote';

// 1. 배너
//    - popular 영화를 들고와서 첫번째 아이템을 보여주자!
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div>
      <TopBanner />
      <PopularMovieSlide />
      <FunnyVote />
      <TopRatedMovieSlide />
      <UpComingMoviesSlide />
      {/* DiscoverMovieSlide의 genreId를 props로 넘겨서 여러가지 장르로 활용하고싶은데,
        * 맨 마지막에 넣은 genreId의 값으로 DiscoverMovieSlide 컴포넌트의 내용이 전부 바뀌어버린다
        * 왜 그런건지 나중에 시간날때 살펴보자ㅠㅠㅠ */}
      <DiscoverMovieSlide genreId={10402} title={'영화 속 그 노래🎵'}/> 
      <IntroBanner />
    </div>
  )
}

export default Homepage