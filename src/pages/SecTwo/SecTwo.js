import React from 'react'
import "./SecTwo.css";
import {AiFillEye} from "react-icons/ai"
import {GiBullseye, GiMetalPlate} from "react-icons/gi"
import {FaHandshake} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';
const SecTwo = () => {
    
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='sectwo'>
        <div className='top-two' data-aos="fade-up">
            Welcome to Khongnangkhong Steel Pvt. Ltd. 
        </div>
        <div className='center-img' data-aos="fade-up">
        <img src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673523691/steellogo-removebg-preview_pvkxdu.png"  className="sectwo-img" alt="nf" />
        </div>
        <div className='gap'></div>
        <div className='sectwo-bot'>
            <div className='sectwo-item' data-aos="fade-up-right">
                <div className='icon'><AiFillEye /></div>
                <div className='gap'></div>
                <div className='low-two'> Vision</div>
                <div className='gap'></div>
                <div>To be the leading company in India supplying best quality steel and steel products and setting benchmarks in customer satisfaction.</div>
            </div>
{/*             
<div class="vl"></div> */}
            <div className='sectwo-item' data-aos="fade-up-right">
            <div className='icon'><GiBullseye /></div>
            <div className='gap'></div>
                <div className='low-two'>Mission</div>
                <div className='gap'></div>
                <div>To create value for customers by providing best products, customized service and strive for excellence without compromising on values or ethics.</div>
            </div>
{/*             
<div class="vl"></div> */}
            <div className='sectwo-item' data-aos="fade-up-left">
                <div className='icon'><GiMetalPlate /></div>
                <div className='gap'></div>
                <div className='low-two'>Products</div>
                <div className='gap'></div>
                <div>The Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising.</div>
            </div>
{/*             
<div class="vl"></div> */}
            <div className='sectwo-item' data-aos="fade-up-left">
                <div className='icon'><FaHandshake /></div>
                <div className='gap'></div>
                <div className='low-two'>Values</div>
                <div className='gap'></div>
                <div>Setting high standards of business and transaction, practice highest principles of work ethics, maintain transparency and persistently strive for excellence.</div>
            </div>
        </div>
    </div>
  )
}

export default SecTwo