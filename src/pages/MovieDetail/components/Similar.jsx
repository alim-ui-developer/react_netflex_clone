import React from 'react'
import { useGetMovieSimilarQuery } from '../../../hooks/useGetMovieSimilar'
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import MovieSliderBackdropType from '../../../common/MovieSlider/MovieSliderBackdropType';

const Similar = ({ movie }) => {
  const movieId = movie.id;
  const { data, isLoading, isError, error } = useGetMovieSimilarQuery({ movieId });

  console.log("Similar", data)

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
        <MovieSliderBackdropType title={`${movie.title} 재밌게 보셨다면 이 영화도 좋아하실 것 같아요!`} movies={data.results} count={12} />
      }
    </>
  )
}

export default Similar