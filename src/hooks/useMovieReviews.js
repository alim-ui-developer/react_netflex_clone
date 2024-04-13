import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchMovieReviews = ({ movieId }) => {
  return api.get(`movie/${movieId}/reviews`);
}

export const useMovieReviewsQuery = ({ movieId }) => {
  return useQuery({
    queryKey: ['movie-review', { movieId }],
    queryFn : () => fetchMovieReviews({ movieId }),
    select: (result) => result.data,
  })
}