import React from 'react'
import { useGetMovieRecommendationsQuery } from '../../../hooks/useGetMovieRecommendations'
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MovieSliderBackdropType from '../../../common/MovieSlider/MovieSliderBackdropType';

const Recommendations = ({ movie }) => {
  const movieId = movie.id;
  const { data, isLoading, isError, error } = useGetMovieRecommendationsQuery({ movieId });

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

  const length = data.results.length;

  return (
    <>
      {/* 데이터가 없는 경우 안보이게 예외처리 */}
      {data.results && length > 0 && 
        <MovieSliderBackdropType title={"이번 주말엔 이 영화 어때요?👀"} movies={data.results} count={8} />
      }
    </>
  )
}

export default Recommendations