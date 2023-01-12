import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./secone.css"

const SecOne = () => {
  return (
    <div>
         <div className="slide" >
                  <Carousel className="slide"  controls={true} keyboard={true} touch={true} interval={3000}>
                        <Carousel.Item className='s1'>
                          <div className='midset'>
                              <div className='top-home'>
                                ENGINEERING YOUR DREAMS WITH US
                              </div>
                              <div className='low-home'>  
                                Quality Construction || Honest Service || Greatest Value
                              </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item className='s2'>
                        <div className='midset'>
                          <div className='top-home'>
                            PREMIUM QUALITY AND VALUE ADDED STEEL PRODUCT 
                          </div>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item className='s3'>
                        <div className='midset'>
                          <div className='top-home'>
                            COMMITED TO PROMPT SERVICE
                          </div>
                        </div>
                        </Carousel.Item>
                  </Carousel>
                  </div>
    </div>
  )
}

export default SecOne