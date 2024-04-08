import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchUpComingMovies = () => {
  return api.get(`movie/upcoming${lang}`);
}

export const useUpComingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-up-coming'],
    queryFn: fetchUpComingMovies,
    select: (result) => result.data
  })
}

