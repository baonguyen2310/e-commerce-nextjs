// npm install react@18 react-dom@18
// npm install react-bootstrap bootstrap

'use client'

import { useState } from 'react'

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';


function MyCarousel() {
  const [show, setShow] = useState(false)

  function handleShowAlertBtn() {
    setShow(true)
  }

  function handleCloseAlertBtn() {
    setShow(false)
  }

  return (
    <>
      <Alert variant='success' show={show} dismissible onClose={handleCloseAlertBtn}>
        Thêm sản phẩm vào giỏ hàng thành công!
      </Alert>
      <button onClick={ handleShowAlertBtn }>Show Alert</button>
      <button onClick={ handleCloseAlertBtn }>Close Alert</button>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=First slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Second slide"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400?text=Third slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
    
  );
}

export default MyCarousel;
