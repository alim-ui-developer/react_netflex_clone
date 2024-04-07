import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const lang = '?language=ko-KR'; // 언어설정 추가

const fetchPopularPersons = () => {
  return api.get(`/person/popular${lang}`);
}

export const usePopularPersonsQuery = () => {
  return useQuery({
    queryKey: ['person-popular'],
    queryFn: fetchPopularPersons,
    select: (result) => result.data
  })
}