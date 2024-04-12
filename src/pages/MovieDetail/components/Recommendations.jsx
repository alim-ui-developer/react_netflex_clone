import React from 'react'
import { FadeLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieRecommendationsQuery } from '../../../hooks/useGetMovieRecommendations'

const Recommendations = ({ movie }) => {
  const movieId = movie.id;
  const { data, isLoading, isError, error } = useGetMovieRecommendationsQuery({ movieId });

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  const length = data.results.length;

  return (
    <>
      {/* 데이터가 없는 경우 안보이게 예외처리 */}
      {data.results && length > 0 && (
        <div>
          <p>{data.results.length}</p>
          <h3>{movie.title} 재밌게 보셨다면 이 영화는 어때요?</h3>
          <ul>
            {data.results.map((result) => 
              <li key={result.id}>
                <p>{result.title}</p>
                <img src={`https://media.themoviedb.org/t/p/w1280_and_h720_bestv2/${result.backdrop_path})`} alt="poster" />
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  )
}

export default Recommendations