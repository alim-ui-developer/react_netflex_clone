import React, { useState } from 'react'


const VoteCard = ({person}) => {
  const [count, setCount] = useState(0);
  const ramdomNumber = Math.floor(Math.random() * 50);
  const vote = () => {
    setCount(count + ramdomNumber);
  }
  
  return (
    <article className='voteCard'>
      <p className="profileImage" onClick={vote}>
        <img src={`https://media.themoviedb.org/t/p/original${person.profile_path}`} alt="" />
      </p>
      <h3 className='name'>{person.name}</h3>
      <p className='filmography'>
        {person.known_for && person.known_for.map((filmography) => 
          <em key={filmography.title}>{filmography.title}</em>
        )}
        의 바로 그 배우!
      </p>
      <p className="counterBox">❤ {count}</p>
    </article>
  )
}

export default VoteCard