import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchMovieDetailPages = ({ movieId }) => {
  return api.get(`movie/${movieId}${lang}`);
}

export const useMovieDetailPagesQuery = ({ movieId }) => {
  return useQuery({
    queryKey: ['movie-detail', { movieId }],
    queryFn : () => fetchMovieDetailPages({ movieId }),
    select: (result) => result.data,
  })
}