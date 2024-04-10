import React from 'react'
import './NoSearchResults.style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";

const NoSearchResults = () => {
  return (
    <article className='NoSearchResultsBox'>
      <div>
        <i><FontAwesomeIcon icon={faFaceSadCry} /></i>
        <h3>검색 결과가 없습니다.</h3>
      </div>
    </article>
  )
}

export default NoSearchResults