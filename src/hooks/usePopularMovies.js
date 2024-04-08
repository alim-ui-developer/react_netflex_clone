import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchPopularMovies = () => {
  return api.get(`/movie/popular${lang}`);
}

export const usePopuralMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-popular'],
    queryFn: fetchPopularMovies,
    select: (result) => result.data
  })
}
