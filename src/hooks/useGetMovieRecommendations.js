import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchGetMovieRecommendations = ({ movieId }) => {
  return api.get(`/movie/${movieId}/recommendations${lang}`)
}

export const useGetMovieRecommendationsQuery = ({ movieId }) => {
  return useQuery({
    queryKey: ['movie-recommendation', { movieId }],
    queryFn: () => fetchGetMovieRecommendations({ movieId }),
    select: (result) => result.data
  })

}