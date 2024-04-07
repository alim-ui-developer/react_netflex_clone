import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../../assets/theMoviesLogo.png'
import './NotFoundPage.style.css';

const NotFoundPage = () => {
  const [topMovie, setTopMovie] = useState([]);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzU4ZjQ5NmE0ZDg5Mjg4M2Q1Mjk2MTc2YmVlNzU5NSIsInN1YiI6IjY2MTEzM2JiMzU2YTcxMDE2NDIzNzRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fi-V4qGZNZ_AM-rWiPE8rd3K11LAfQQwgyFXXUtlAUQ'
    }
  };

  const getData = async () => {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=ko-KR&page=1';
    const response = await fetch(url, options);
    const data = await response.json();
    setTopMovie(data.results[0])
  };

  useEffect(() => {
    getData();
  },[])
  
  return (
    <section className='notFoundPageWrapper'>
      <h1 className='screen_out'>404 Error Page</h1>
      <article>
        <h2 className='logo'>
          <Link to='/'>
            <img src={logo} alt="The Movies" />
          </Link>
        </h2>
        <h3>Oops!</h3>
        <p className='image'>
          <img src="https://blog.kakaocdn.net/dn/bly7IG/btqG67Lc7e6/orwyE4cmOGaKh4wJi4rDG1/img.gif" alt="아앗 안돼" />
        </p>
        <p className="subTitle">아앗, 아직은 안돼요!</p>
        <div className="textBox">
          <p className='text'>이곳은 아직 세상에 나오지 않은 작품을 위해 비워둔 공간입니다.<br />조금만 더 기다려주세요!<br /><br />그나저나 요즘 핫한 그 영화</p>
          {/* <p>존재하지 않는 주소를 입력했거나, 요청하신 페이지의 주소가 변경 혹은 삭제되어 찾을 수 없습니다.</p> */}

            <Link to='/'
              className='btn_home'
              onMouseEnter={() => setIsMouseEnter(true)}
              onMouseLeave={() => setIsMouseEnter(false)}
            >
              {isMouseEnter ? '같이 보러가실래요?' : `${topMovie.title} 보셨어요?`}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Link>
        </div>
      </article>
    </section>
  )
}

export default NotFoundPage