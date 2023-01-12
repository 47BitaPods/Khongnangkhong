import React from 'react'
import "./s4.css"
import {
    Box,
    Image,
  } from '@chakra-ui/react';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
const SecFour = () => {
  
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
        <div className='sec4'>
        <div className='top-two'>
            Our products
        </div>
        <div  className='Ame-left'>
        <Box className="sec4-item" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'  data-aos="fade-up-right">
        <div class="img-hover-zoom img-hover-zoom--xyz">
            <Image className="sec4img" src="https://img.freepik.com/premium-photo/warehouse-metal-blank-electroplating-plant-metal_109285-1194.jpg?w=996" alt="nf" />
            </div>
            Billet
            </Box>
            <Box className="sec4-item" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' data-aos="fade-up">
            <div class="img-hover-zoom img-hover-zoom--xyz">
            <img className="sec4img" src="https://m.economictimes.com/thumb/msid-78101460,width-1200,height-900,resizemode-4,imgsize-941581/tmt-bars.jpg" alt="nf" />
            </div>
            TMT Bars
            </Box>
            <Box className="sec4-item" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' data-aos="fade-up-left">
            <div class="img-hover-zoom img-hover-zoom--xyz">
            <img className="sec4img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JPiMWMR5mhLS3H1K7zHjIlmOZ3NxAqJK5g&usqp=CAU" alt="nf" />
            </div>
            MS Angle
            </Box>
            <Box className="sec4-item" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' data-aos="fade-up-right">
            <div class="img-hover-zoom img-hover-zoom--xyz">
            <img className="sec4img" src="https://res.cloudinary.com/dcyfkgtgv/image/upload/v1673520989/large-steel-factory-warehouse_oxrxqv.jpg" alt="nf" />
            </div>
            MS Channel
            </Box>
            <Box className="sec4-item" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' data-aos="fade-up">
            <div class="img-hover-zoom img-hover-zoom--xyz">
            <img className="sec4img" src="http://www.manishsteels.com/iron-steel-traders-kolhapur/product/m-s-beam/m-s-beam-04.jpg" alt="nf" />
            </div>
            MS Beam
            </Box>
            <Box className="sec4-item" maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' data-aos="fade-up-left">
            <div class="img-hover-zoom img-hover-zoom--xyz">
            <Image className="sec4img" src="https://www.jsmetals.net/images/products/MSPlate,CheckeredPlate.jpg" alt="nf" />
            </div>
            MS Plate
            </Box>
            </div>
        </div>
    </div>
  )
}

export default SecFour