import React from 'react';
import './MovieCollectionDetailPage.style.css';
import { useMovieCollectionQuery } from '../../hooks/useMovieCollectionPages';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useParams, useNavigate } from 'react-router-dom';

const MovieCollectionPage = () => {
  const params = useParams();
  const collectionId = params.collectionId;
  const { data, isLoading, isError, error } = useMovieCollectionQuery({ collectionId });

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
    <section className='movieCollectionPage'>
      <h2 className='screen_out'>Movie</h2>
      <article
        className='title'
        style={{
          backgroundImage: `url("https://media.themoviedb.org/t/p/w1920_and_h800_bestv2${data.backdrop_path}")`
        }}
      >
        <div>
          <h3>{data.name}</h3>
          {data.overview && <p>{data.overview}</p>}
        </div>
      </article>
      <Container maxWidth="xl" className='collectionList'>
        <>
          {data.parts && data.parts.map((part) => 
            <div key={part.id} className='collectionListItem'>
              <p className="poster" onClick={() => goToMovieDetailPage(part.id)}>
                <img src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${part.poster_path})`} alt={part.name} />
              </p>
              <div>
                <h4>{part.title}({part.original_title})</h4>
                {part.release_date && new Date(part.release_date) <= new Date()
                  ? <p className='releaseDate'><span className="screen_out">개봉일:</span>{part.release_date.slice(0,4)} 개봉</p>
                  : <p className='releaseDate'>개봉 예정</p>
                }
                {part.overview && <p className='overview'>{part.overview}</p>}
              </div>
            </div>
          )}
        </>
      </Container>
    </section>
  )
}

export default MovieCollectionPage