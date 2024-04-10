import React, { useState, useEffect } from 'react';
import './MoviePage.style.css';
import { FadeLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';
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
  // const [ movieList, setMovieList ] = useState([]);

  const keyword = query.get('q');
  
  const { data, isLoading, isError, error} = useSearchMovieQuery({ keyword, page });

  // console.log(movieList)
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  }
 


  // 인기순 정렬
  const dataSortByPopularity = (event) => {
    const sortedData = [...movieList].sort((a, b) => b.popularity - a.popularity);
    movieList = sortedData;
    console.log("dataSortByPopularity", sortedData)
  }

  // 최신순 정렬
    const dataSortByLatest = (event) => {
      const sortedData = [...movieList].sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      movieList = sortedData;
      console.log("dataSortByLatest", movieList);
    }
  
  // 장르별 정렬
  const dataSortByGenre = (genreId) => {
    console.log("dataSortByGenre", movieList);
  }


  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  let movieList = data.results; // 이걸 useState로 쓰면 어떻게될까??



  return (
    <Container className='moviePage'>
      {movieList.length === 0
        ? <NoSearchResults />
        : 
        <Row>
          <Col lg={3} md={3} xs={12} className='filterArea'>
            <h3>Fliters</h3>
            <div className="filters">
              <Button onClick={() => dataSortByPopularity()}>인기순</Button>
              <Button onClick={() => dataSortByLatest()}>최신순</Button>
              <Button onClick={() => dataSortByGenre(18)}>액션</Button>
            </div>
          </Col>
          <Col lg={9} md={9} xs={12} className='resultArea'>
            {/* 영화 카드 */}
            <Row>
              {movieList.map((movie) => (
                <Col key={movie.id} lg={3} xs={12}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              marginPagesDisplayed={0}
              pageCount={data?.total_pages} // 전체 페이지가 몇개인지
              previousLabel="<"
              breakLabel="..."
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </Col>
        </Row>
      }
    </Container>
  )
}

export default MoviePage