import React from 'react'
import "./SecThree.css"
import {GiRoad,GiRailRoad,GiManualMeatGrinder,GiCommercialAirplane,GiHarborDock,GiFactory,GiCableStayedBridge} from "react-icons/gi";
import {IoIosConstruct} from "react-icons/io"
import {BiBuildings} from "react-icons/bi"
import AOS from 'aos';
import 'aos/dist/aos.css';
const SecThree = () => {
    
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <div className='secthree'>
        <div className='top-two'>
            Industries we Cater
        </div>
            <div>
            <div className='Ame-left' data-aos="fade-up-right">
                        <div className='Ame-int odd' data-aos="fade-up-right">
                            <GiRoad />
                            <div className='Ame-text'>Road</div>
                        </div>
                        <div className='Ame-int even' data-aos="fade-up">
                            <GiManualMeatGrinder />
                            <div className='Ame-text'>Machinery</div>
                        </div>
                        <div className='Ame-int odd' data-aos="fade-up-left">
                            <GiRailRoad />
                            <div className='Ame-text'>Railways</div>
                        </div>
                        <div className='Ame-int even' data-aos="fade-up-right">
                            <GiCommercialAirplane />
                            <div className='Ame-text'>Airports</div>
                        </div>
                        <div className='Ame-int odd' data-aos="fade-up">
                            <GiHarborDock />
                            <div className='Ame-text'>
                            Sea Ports
                            </div>
                        </div>
                        <div className='Ame-int even' data-aos="fade-up-left">
                            <GiCableStayedBridge />
                            <div className='Ame-text'>
                            Bridges
                            </div>
                        </div>
                        <div className='Ame-int odd' data-aos="fade-up-right">
                            <IoIosConstruct />
                            <div className='Ame-text'>
                            Construction
                            </div>
                        </div>
                        <div className='Ame-int even' data-aos="fade-up">
                            <GiFactory />
                            <div className='Ame-text'>
                            Plant
                            </div>
                        </div>
                        <div className='Ame-int odd' data-aos="fade-up-left">
                            <BiBuildings />
                            <div className='Ame-text'>Houses</div>
                        </div>
            </div>
        </div>
        </div>
        <div className='gap'></div>
    </div>
  )
}

export default SecThree