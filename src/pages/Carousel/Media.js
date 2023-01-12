import './Carousel.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Media = () => {

  
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className='top-two'>
            Our team
        </div>
        <div className="slide carou-total" >
                  <Carousel className="slide" variant='dark' controls={true} keyboard={true} touch={true} interval={2000}>
                        <Carousel.Item className='Carou-tot'>
                        <div className='Carou-tot'>
                          <div className='carou-left'>
                            <img className='carou-imgl'
                              src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524438/1_doike2.jpg"
                              alt="First slide"
                              data-aos="fade-up-right"
                            />
                            </div>
                            <div className='carou-right'>
                            <img className='carou-img'
                            src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524438/5_gnjtyr.jpg"
                            alt="fourt slide"
                            data-aos="fade-up-left"
                          />
                            </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item className='Carou-tot'>
                          <div className='Carou-tot'>
                            <div className='carou-left'>
                              <img className='carou-img'
                                src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524438/2_m8plup.jpg"
                                alt="Second slide"
                                data-aos="fade-up-right"
                              />
                            </div>
                            <div className='carou-right'>
                            <img className='carou-img'
                            src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524438/6_p6iorg.jpg"
                            alt="Third slide"
                            data-aos="fade-up-left"
                          />
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item className='Carou-tot'>
                          <div className='Carou-tot'>
                            <div className='carou-left'>
                              <img className='carou-img'
                                src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524438/4_nsvfje.jpg"
                                alt="Second slide"
                                data-aos="fade-up-right"
                              />
                            </div>
                            <div className='carou-right'>
                            <img className='carou-img'
                            src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524438/3_qxjplo.jpg"
                            alt="Third slide"
                            data-aos="fade-up-left"
                          />
                            </div>
                          </div>
                        </Carousel.Item>
                        <Carousel.Item className='Carou-tot'>
                          <div className='Carou-tot'>
                            <div className='carou-left'>
                              <img className='carou-img'
                                src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524439/8_vysnoy.jpg"
                                alt="Second slide"
                                data-aos="fade-up-right"
                              />
                            </div>
                            <div className='carou-right'>
                            <img className='carou-img'
                            src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673524439/7_orqans.jpg"
                            alt="Third slide"
                            data-aos="fade-up-left"
                          />
                            </div>
                          </div>
                        </Carousel.Item>
                  </Carousel>
                  </div>
    </div>
  )
}

export default Media