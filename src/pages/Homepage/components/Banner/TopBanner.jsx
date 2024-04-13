import React from 'react'
import './TopBanner.style.css';
import { usePopuralMoviesQuery } from '../../../../hooks/usePopularMovies';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';  
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopuralMoviesQuery();

  // const navigate = useNavigate();
  
  // 각 영화의 id에 맞는 상세 페이지로 이동
  const navigate = useNavigate();
  const goToMovieDetailPage = (movieId) => {
    navigate(`/movies/${movieId}`);
  }

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
    <article
      className='topBanner'
      style={{
        // backgroundImage: `url("https://media.themoviedb.org/t/p/original${data.results[0].poster_path}")`
        backgroundImage: `url("https://media.themoviedb.org/t/p/w1920_and_h800_bestv2${data.results[0].backdrop_path}")`
      }}
    >
      <Container maxWidth="xl" className='topBannerArea'>
        <div className='text-white textBox'>
          <h1 className='pick'>Weekend Pick!</h1>
          <h2>{data?.results[0].title}</h2>
          <h3 className='screen_out'>평점</h3>
          <p className='voteCount'>총 {data?.results[0].vote_count}명의 관람객들이 평균 <em>{data?.results[0].vote_average.toFixed(1)}점</em>의 점수를 주었어요.</p>
          <h3 className='screen_out'>영화 정보</h3>
          <p className='discription'>{data?.results[0].overview}</p>
          <button className='btn_mainBannerPickLink' onClick={() => goToMovieDetailPage(data?.results[0].id)}>보러가기</button>
        </div>
      </Container>
    </article>
  )
}

export default Banner