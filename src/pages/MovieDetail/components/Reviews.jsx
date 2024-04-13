import React from 'react';
import './Reviews.style.css';
import { useMovieReviewsQuery } from '../../../hooks/useMovieReviews'
import CircularProgress from '@mui/material/CircularProgress';
import { Alert, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Reviews = ({ movie }) => {
  const movieId = movie.id;
  const { data, isLoading, isError, error } = useMovieReviewsQuery({ movieId });

  const getUpdateData = (date) => {
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const time = date.slice(11,19);
    const text = `📆 ${year}/${month}/${day}　🕒 ${time}`
    return text;
  }

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

  const length = data.results.length;
  return (
    <>
      {/* 데이터가 없는 경우 안보이게 예외처리 */}
      {data.results && length > 0 &&
        <section className='reviews'>
          <h3>Reviews <span>({data.results.length})</span></h3>
          {data.results.map((review, index) => 
            <Accordion 
              // defaultExpanded 
              sx={{
                background:"transparent",
                border:"1px solid rgba(255,255,255,0.2)",
                borderRadius:0
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{fill:"var(--sub-font-color)"}} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{margin:0, padding:"5px 20px"}}
              >
                <Typography className='reviewTitle' sx={{padding:"0"}}>
                  <h4>{review.author_details.username}</h4>
                  <p>{getUpdateData(review.updated_at)}</p>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{
                  color:"var(--main-font-color)",
                  padding:"5px 10px"
                }}>{review.content}</Typography>
              </AccordionDetails>
            </Accordion>
          )}  
        </section>
      }
    </>
  )
}

export default Reviews