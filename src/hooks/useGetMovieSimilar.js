import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchGetMovieSimilar = ({ movieId }) => {
  return api.get(`/movie/${movieId}/similar${lang}`)
}

export const useGetMovieSimilarQuery = ({ movieId }) => {
  return useQuery({
    queryKey: ['movie-similar', { movieId }],
    queryFn: () => fetchGetMovieSimilar({ movieId }),
    select: (result) => result.data
  })
}