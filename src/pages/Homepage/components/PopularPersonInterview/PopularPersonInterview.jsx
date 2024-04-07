import React from 'react';
import { FadeLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import { usePopularPersonsQuery } from '../../../../hooks/usePopularPersons';

const PopularPersonInterview = () => {
  const { data, isLoading, isError, error } = usePopularPersonsQuery();
  
  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  console.log(data);

  return (
    <div>{data.results[4].name}</div>
  )
}

export default PopularPersonInterview