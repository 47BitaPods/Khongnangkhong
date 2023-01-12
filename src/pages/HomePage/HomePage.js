import React from 'react'
import Navbar from '../NavBar/NavBar'
import "./home.css"
import Footer from '../Footer/Footer';
import SecOne from '../SecOne/SecOne';
import SecTwo from '../SecTwo/SecTwo';
import SecThree from '../SecThree/SecThree';
import SecFour from '../SecFour/SecFour';
import Media from '../Carousel/Media';
const HomePage = () => {
  return (
    <div className='totalhome'>
      {/* <div class="scroll-control">
			<span class="one"></span>
			<span class="two"></span>
			<span class="three"></span>
		</div> */}
    
        <div className='navy'><Navbar /></div>
        <SecOne />
        <SecTwo />
        <div className='gap'></div>
        <SecThree />
        <div className='gap'></div>
        <SecFour />
        <div className='gap'></div>
        <Media />
        <div className='gap'></div>
                <section class="scroll section s-three" data-section-name="s-three">
                  <Footer />
                  </section>
    </div>
  )
}

export default HomePage