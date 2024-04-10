import { useQuery } from "@tanstack/react-query";
import api from "../utils/api"

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchSearchMovie = ({ keyword, page }) => {
  // 검색한 keyword가 있으면 keyword에 맞는 영화를 보여주고, 없으면 인기 영화를 보여준다.
  return keyword 
  ? api.get(`/search/movie${lang}&query=${keyword}&page=${page}`) 
  : api.get(`/movie/popular${lang}&page=${page}`);
}

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: ['movie-search', { keyword, page }],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
  })
}