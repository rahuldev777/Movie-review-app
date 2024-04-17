import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';

function Cards() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2
      };
  return (
    <>
    <div className='container'>

  
    
    <div className="slider-container" style={{marginTop:"5%",overflow:"hidden"}}>
      <Slider {...settings}>
        <div>
        <MDBCard  className='shadow' style={{width:'25rem',height:"13rem"}}>
      <MDBCardBody>
        <MDBCardTitle>R J Shetty</MDBCardTitle>
        <MDBCardText>it is very excellent review app</MDBCardText>
     
      </MDBCardBody>
    </MDBCard>
        </div>
        <div>
        <MDBCard  className='shadow' style={{width:'25rem',height:"13rem"}}>
      <MDBCardBody>
        <MDBCardTitle>Vishwa Kumar</MDBCardTitle>
        <MDBCardText>very user friendly app</MDBCardText>
  
      </MDBCardBody>
    </MDBCard>
        </div>
        <div>
        <MDBCard  className='shadow' style={{width:'25rem',height:"13rem"}}>
      <MDBCardBody>
        <MDBCardTitle>RAY JEY</MDBCardTitle>
        <MDBCardText>UI is very good and Nice</MDBCardText>
   
      </MDBCardBody>
    </MDBCard>
        </div>
        <div>
        <MDBCard  className='shadow' style={{width:'25rem',height:"13rem"}}>
      <MDBCardBody>
        <MDBCardTitle>Micheal Ali</MDBCardTitle>
        <MDBCardText>Nice</MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
        </div>
        
      </Slider>
    </div>
  
  </div>
 
    
      
      
   
    </>
  )
}

export default Cards