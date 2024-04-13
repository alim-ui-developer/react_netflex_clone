import React from 'react';
import './FunnyVote.style.css';
import { usePopularPersonsQuery } from '../../../../hooks/usePopularPersons';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Container from '@mui/material/Container';
import VoteCard from './VoteCard';

const FunnyVote = () => {
  const { data, isLoading, isError, error } = usePopularPersonsQuery();

  if(isLoading) {
    return (
      <div className="loadingSpinner">
        <CircularProgress sx={{color: '#795dfb', animationDuration: '600ms'}} />
      </div>
    )
  }
  if(isError) {
    return <Alert severity="error">{error.message}</Alert>
  } 

  const person = data.results[2];

  return (
    <article className='funnyVote'>
      <Container maxWidth="xl" className='voteArea'>
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