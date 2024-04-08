import React from 'react'
import './IntroBanner.style.css';
import logo  from '../../../../assets/mainLogo.png';
import { Container, Button }  from 'react-bootstrap';


const IntroBanner = () => {
  return (
    <Container className='IntroBanner'>
      <h1><img src={logo} alt="The Movies" /></h1>
      <p>우리가 사랑하는 영화를 스마트폰, 태블릿, 노트북, TV에서 무제한으로.<br />비행기, 기차, 잠수함. 어디서든 자유롭게 시청하세요.</p>
      <Button variant="outline-light primary" size="lg">Get Started</Button>
    </Container>
  )
}

export default IntroBanner