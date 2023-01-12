import React from 'react'
import './footer.css';
import { NavLink } from 'react-router-dom';
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';

import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  
  
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='totalf' data-aos="fade-up">
      <div className='footT'>
        <div className="leftf">
            <div className='logof'>
            <img className='logF' src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673523691/steellogo-removebg-preview_pvkxdu.png" alt="nf" />
            </div>
            <div className='leftf-b'>
              <div className='ico'>
              <BsLinkedin />
              </div><div className='ico'>
              <BsTwitter />
              </div><div className='ico'>
              <BsFacebook />
              </div>
            </div>
        </div>
       
        <div className='middle'>
          <ul>
            <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
                <li><span>Products</span></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Global">Billet</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Mission">TMT</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Inclusion">MS Angle</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Investors">MS Channel</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Newroom">MS Beam</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Purpose">MS Plate</a></li></ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
        <div className='rightf'>
        <ul>
        <ListGroup variant="flush">
            <ListGroup.Item variant="dark">
                <li>&nbsp; &nbsp;</li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Brokers">MS Flat</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Landlords">  Round Bar</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Refer">Square Bar</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Event">Wire Rod</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Event">Sponge Iron</a></li></ListGroup.Item>
                <ListGroup.Item action variant="dark">
                <li><a href="#/Event">Pig Iron</a></li></ListGroup.Item>
                </ListGroup>
          </ul>
        </div>
        <div className='rightr'>
        <ul>
        
    
    
    
        <ListGroup variant="flush">
        <ListGroup.Item variant="dark">
            <li><span>Useful Pages</span></li>
            </ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="#/Help">Home</a></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="/Admin">About Us</a></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="#/Contact">Contact Us</a></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="#/Covid">Products</a></li></ListGroup.Item>
            <ListGroup.Item action variant="dark">
            <li><a href="/Admin">Admin Login</a></li></ListGroup.Item>
            </ListGroup>
          </ul>
        </div>
      </div>
      <div className="footB">
        <NavLink to="/projects"> Privacy Policy </NavLink>&nbsp; | 
      &nbsp;<NavLink to="/projects"> Terms & Conditions </NavLink> &nbsp; | &nbsp; 
      <NavLink to="/projects"> Sitemap</NavLink>
      </div>
    </div>
  )
}

export default Footer;