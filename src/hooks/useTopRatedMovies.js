import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchTopRatedMovies = () => {
  return api.get(`/movie/top_rated${lang}`);
}

export const useTopRatedMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-top-rated'],
    queryFn: fetchTopRatedMovies,
    select: (result) => result.data
  })
}
