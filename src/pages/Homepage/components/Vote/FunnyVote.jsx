import React from 'react';
import './FunnyVote.style.css';
import { FadeLoader } from 'react-spinners';
import { Container }  from 'react-bootstrap';
import { usePopularPersonsQuery } from '../../../../hooks/usePopularPersons';
import Alert from 'react-bootstrap/Alert';
import VoteCard from './VoteCard';

const FunnyVote = () => {
  const { data, isLoading, isError, error } = usePopularPersonsQuery();
  if(isLoading) {
    return <div className="loadingSpinner"><FadeLoader color="#795dfb" /></div>
  }
  if(isError) {
    return <Alert variant='danger'>{error.message}</Alert>
  } 

  const person = data.results[2];

  return (
    <article className='funnyVote'>
      <Container className='voteArea'>
        <h2 className='title'>The meaningless vote!</h2>
        <h3 className='subject'>다시 태어난다면 되고 싶은 얼굴은?🤔</h3>
        <div className='voteCardBox'>
          <VoteCard person={data.results[14]} />
          <p className='vs'>VS</p>
          <VoteCard person={data.results[10]} />
        </div>
      </Container>
    </article>
  )
}

export default FunnyVote