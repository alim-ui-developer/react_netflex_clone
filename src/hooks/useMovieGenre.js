import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieGenre = () => {
  return api.get(`genre/movie/list`)
}

export const useMovieGerneQuery = () => {
  return useQuery({
    queryKey: ['movie-genre'],
    queryFn: fetchMovieGenre,
    select:(result) => result.data.genres, // data에서 원하는 부분만 골라서 쓰겠다
    staleTime: 300000 // 지정한 시간동안(5분)은 페이지를 아무리 왔다갔다해도 api가 새로 호출되지 않음(자주 갱신하지 않아도 되는 데이터는 이런식으로 쓴다)
  })
}