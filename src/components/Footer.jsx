import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  
} from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";


function Footer({InsideLogin}) {
  return (
    <>
    {
      InsideLogin?(
        <MDBFooter className='bg-dark text-center text-white' style={{
          position: "fixed",
          height: "100px",
          bottom: "0",
          width: "100%"
         }}>
          <MDBContainer className='p-4 d-flex align-items-center justify-content-center g-3'>
          
          <a href="http://" style={{textDecoration:"none",color:'white'}} ><FaGithub style={{height:"34px",width:"60px"}} /></a>
            
           
                   <a href="http://" style={{textDecoration:"none",color:'white'}}> <CiFacebook  style={{height:"36px",width:"60px"}} /></a>
                 
                   <a href="http://" style={{textDecoration:"none",color:'white'}}>  <FaInstagram style={{height:"33px",width:"60px"}}  /> </a>
                 
                   <a href="http://" style={{textDecoration:"none",color:'white'}}>  <CiLinkedin style={{height:"35px",width:"60px"}}   />   </a>
    
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
              MDBootstrap.com
            </a>
          </div>
        </MDBFooter>
      ):(
        <MDBFooter className='bg-dark text-center text-white'>
          <MDBContainer className='p-4 d-flex align-items-center justify-content-center g-3'>
          
          <a href="http://" style={{textDecoration:"none",color:'white'}} ><FaGithub style={{height:"34px",width:"60px"}} /></a>
            
           
                   <a href="http://" style={{textDecoration:"none",color:'white'}}> <CiFacebook  style={{height:"36px",width:"60px"}} /></a>
                 
                   <a href="http://" style={{textDecoration:"none",color:'white'}}>  <FaInstagram style={{height:"33px",width:"60px"}}  /> </a>
                 
                   <a href="http://" style={{textDecoration:"none",color:'white'}}>  <CiLinkedin style={{height:"35px",width:"60px"}}   />   </a>
    
          </MDBContainer>
    
          <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2024 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
             MG
            </a>
          </div>
        </MDBFooter>
      )
    }
    
    </>
  )
}

export default Footer