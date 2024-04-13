import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchMovieCollectionPages = ({ collectionId }) => {
  return api.get(`/collection/${collectionId}${lang}`)
}

export const useMovieCollectionQuery = ({ collectionId }) => {
  return useQuery({
    queryKey: ['movie-collection', { collectionId }],
    queryFn: () => fetchMovieCollectionPages({ collectionId }),
    select: (reusult) => reusult.data
  })
}