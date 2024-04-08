import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchNowPlayingMovies = () => {
  return api.get(`movie/now_playing${lang}`);
}

export const useNowPlayingMoviesQuery = () => {
  return useQuery({
    queryKey: ['now-playing-movie'],
    queryFn: fetchNowPlayingMovies,
    select: (result) => result.data
  })
}