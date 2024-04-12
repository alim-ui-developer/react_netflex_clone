import React from 'react'
import { FadeLoader } from 'react-spinners';
import Alert from 'react-bootstrap/Alert';
import { useGetMovieRecommendationsQuery } from '../../hooks/useGetMovieRecommendations';
import { useParams } from 'react-router-dom';

const MovieCollectionPage = () => {
  const params = useParams();
  const collectionId = params.id;
  const { data, isLoading, isError, error } = useGetMovieRecommendationsQuery({ collectionId });

  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  }

  console.log("MovieCollectionPage", data, collectionId)

  return (
    <div>MovieCollection</div>
  )
}

export default MovieCollectionPage