import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchMovieCollection = ({ collectionId }) => {
  return api.get(`/collection/${collectionId}${lang}`)
}

export const useMovieCollectionQuery = ({ collectionId }) => {
  console.log("useMovieCollectionQuery", collectionId)
  return useQuery({
    queryKey: ['movie-collection', { collectionId }],
    queryFn: () => fetchMovieCollection({ collectionId }),
    select: (reusult) => reusult.data
  })

}