import React from 'react'
import './TopBanner.style.css';
import { FadeLoader } from 'react-spinners';
import { Container }  from 'react-bootstrap';
import { usePopuralMoviesQuery } from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

const Banner = () => {
  const { data, isLoading, isError, error } = usePopuralMoviesQuery();
  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }
  return (
    <article
      className='topBanner'
      style={{
        backgroundImage: `url("https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data.results[0].poster_path}")`
      }}
    >
      <Container className='topBannerArea'>
        <div className='text-white textBox'>
          <h1 className='pick'>Weekend Pick!</h1>
          <h2>{data?.results[0].title}</h2>
          <h3 className='screen_out'>평점</h3>
          <p className='voteCount'>총 {data?.results[0].vote_count}명의 관람객들이 평균 <em>{data?.results[0].vote_average}점</em>의 점수를 주었어요.</p>
          <h3 className='screen_out'>영화 정보</h3>
          <p className='discription'>{data?.results[0].overview}</p>
            <Link path="/" className='btn_mainBannerPickLink'>보러가기</Link>
        </div>
      </Container>
    </article>
  )
}

export default Banner