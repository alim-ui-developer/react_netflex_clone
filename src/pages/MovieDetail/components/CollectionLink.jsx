import React, { useEffect } from 'react';
import './CollectionLink.style.css';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const CollectionLink = ({ movie }) => {
  const movieId = movie.id;
  const collectionId = movie.belongs_to_collection.id;

  // 각 영화의 id에 맞는 상세 페이지로 이동
  const navigate = useNavigate();
  const goToMovieCollectionDetailPage = (movieId, collectionId) => {
    navigate(`/movies/${movieId}/${collectionId}`);
  }

  return (
    <Container maxWidth="xl">
      <aside
        className='collectionLink'
        style={{
        backgroundImage: `url("https://media.themoviedb.org/t/p/w1280_and_h720_bestv2${movie.belongs_to_collection.backdrop_path}")`
        }}
        onClick={() => goToMovieCollectionDetailPage(movieId, collectionId)}
      >
        <div>
          <h4>{movie.belongs_to_collection.name}</h4>
          <p>보러가기</p>
        </div>
      </aside>
    </Container>
  )
}

export default CollectionLink