import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchKoreanMovieTrailer = ({ movieId }) => {
  return api.get(`movie/${movieId}/videos${lang}`);
}

const fetchEnglishMovieVideo = ({ movieId }) => {
  return api.get(`movie/${movieId}/videos`);
}

export const useKoreanMovieTraileroQuery = ( movieId ) => {
  return useQuery({
    queryKey: ['movie-trailer-korean', movieId],
    queryFn: () => fetchKoreanMovieTrailer(movieId),
    select: (result) => result.data
  })
}

export const useEnglishMovieTraileroQuery = ( movieId ) => {
  return useQuery({
    queryKey: ['movie-trailer-english', movieId],
    queryFn: () => fetchEnglishMovieVideo(movieId),
    select: (result) => result.data
  })
}