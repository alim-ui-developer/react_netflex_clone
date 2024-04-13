import React, { useState, useEffect } from 'react';
import './MoviePage.style.css';
import { useMovieGerneQuery } from '../../hooks/useMovieGenre';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useSearchParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Row, Col, Button, Form } from 'react-bootstrap';
import MovieCardPosterType from '../../common/MovieCard/MovieCardPosterType';
import ReactPaginate from 'react-paginate';
import NoSearchResults from '../../common/NoSearchResults/NoSearchResults';

// 경로 2가지
// 1. navbar에서 클릭해서 온 경우 >> keyword없을땐 popular movie보여주기
// 2. keyword를 입력해서 온 경우 >> keyword와 관련된 영화를 보여줌

// 페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할 떄 마다 page바꿔주기
// page값이 바뀔 때마다 useSearchMovie에 page까지 넣어서 fetch

const MoviePage = () => {
  const [ query, setQuery ] = useSearchParams();
  const [ page, setPage ] = useState(1);
  const keyword = query.get('q');
  
  const { data, isLoading, isError, error} = useSearchMovieQuery({ keyword, page });
  const {data: genreData} = useMovieGerneQuery();

  const [ movieList, setMovieList ] = useState([]);

  // console.log(movieList)
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  }
 
  // 인기순 정렬
  const dataSortByPopularity = () => {
    const sortedData = [...movieList].sort((a, b) => b.popularity - a.popularity);
    setMovieList(sortedData);
  }

  // 최신순 정렬
    const dataSortByLatest = () => {
      const sortedData = [...movieList].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      setMovieList(sortedData);
    }
  
  // 장르별 정렬
  const dataSortByGenre = (genreId) => {
    const genreMovieList = data.results.filter((movie) => movie.genre_ids.includes(genreId));
    setMovieList(genreMovieList);
  }

  // 장르 필터 버튼 id
  const genreButtonArr = [18, 10749, 16, 53, 9648 ,12, 28, 14, 10402, 27, 99];

  // 장르 버튼 active 효과
  const [isActive, setIsActive] = useState(0);
  const filterButtonActive = (index) => {
    setIsActive(index);
  };

  // 목록 초기값 셋팅
  useEffect(() => {
    data && setMovieList(data.results);
  },[data])

  // movieList값 변경될때마다 새로고침
  useEffect(()=>{
	},[movieList])

  // 정렬 selectBox
  const changeEvent = (event) => {
    const value = event.target.value;
    switch (value) {
      case 'popularity' :
        dataSortByPopularity();
      break;
      case 'latest':
        dataSortByLatest();
      break;
      default:
        return;
    }
  }

  const init = () => {
    setMovieList(data.results)
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
    <Container maxWidth="xl">
      <section className='moviePageArea'>
          <Row>
            <Col lg={2} md={4} s={6} xs={12} className='filterArea'>
              <h3 className='screen_out'>장르별 필터</h3>
              <ul className="filters">
                {genreButtonArr.map((genreId, index) => 
                  <li
                    key={`filterButton${index}`} 
                    className={isActive === index ? 'active' : ''}
                    onClick={() => filterButtonActive(index)}
                  >
                    <Button onClick={() => dataSortByGenre(genreId)}>
                      {genreData.find((genre) => genre.id === genreId).name}
                    </Button>
                  </li>
                )}
              </ul>
            </Col>
            <Col lg={10} md={8} s={6} xs={12} className='resultArea'>
              <div className='sortingBox'>
                <Button className="btn_filterReset" onClick={() => init()}>필터 초기화</Button>
                <Form.Select onChange={(event) => changeEvent(event)}>
                  <option value="popularity">인기순</option>
                  <option value="latest">최신순</option>
                </Form.Select>
              </div>
              {movieList.length === 0 ? <NoSearchResults /> : 
                <>
                  <Row>
                    {movieList.map((movie) => (
                      <Col key={movie.id} lg={3} md={6} xs={12}>
                        <MovieCardPosterType movie={movie} />
                      </Col>
                    ))}
                  </Row>
                  <div className="pagenationBox">
                    <ReactPaginate
                      pageRangeDisplayed={5}
                      marginPagesDisplayed={0}
                      pageCount={data?.total_pages} // 전체 페이지가 몇개인지
                      nextLabel='>'
                      previousLabel='<'
                      pageClassName='page-item'
                      pageLinkClassName='page-link'
                      previousClassName='page-item'
                      previousLinkClassName='page-link'
                      nextClassName='page-item'
                      nextLinkClassName='page-link'
                      breakLabel='...'
                      breakClassName='page-item'
                      breakLinkClassName='page-link'
                      containerClassName='pagination'
                      activeClassName='active'
                      renderOnZeroPageCount={null}
                      forcePage={page - 1}
                      onPageChange={handlePageClick}
                    />
                  </div>
                </>
              }
            </Col>
          </Row>
      </section>
    </Container>
  )
}

export default MoviePage