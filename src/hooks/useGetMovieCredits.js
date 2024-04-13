import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchGetMovieCredits = ({ movieId }) => {
  return api.get(`/movie/${movieId}/credits${lang}`);
}

export const useGetMovieCreditsQuery = ({ movieId }) => {
  return useQuery({
    queryKey: ['movie-credits', { movieId }],
    queryFn: () => fetchGetMovieCredits({ movieId }),
    select: (result) => result.data
  })
}