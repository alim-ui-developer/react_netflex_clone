import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchMovieDiscover = (isIncludeAdult, genreId) => {
  return api.get(`discover/movie${lang}&include_adult=${isIncludeAdult}&region=ko-KR&sort_by=popularity.desc&with_genres=${genreId}`);
}

export const useMovieDiscoverQuery = (isIncludeAdult, genreId) => {
  return useQuery({
    queryKey: ['movie-discover'],
    queryFn: () => fetchMovieDiscover(isIncludeAdult, genreId),
    select: (result) => result.data
  })
}