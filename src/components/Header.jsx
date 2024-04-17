import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import '../components/Header.css'
import {  NavLink, useNavigate } from 'react-router-dom';
import { NavbarBrand } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';


function Header({insidedashboard,InsideLogin}) {

  const navigate=useNavigate();
  
const logout= async()=>{

await signOut(auth)
alert("log out successfully")
 
 navigate("/")
}
  

  return (
  <>   
<div id='container'>

  {insidedashboard || InsideLogin ? (

    <Navbar collapseOnSelect expand="lg" className='nav'  style={{background:"black",position:"relative"}}>
    <Container >

  <NavLink to='/' ><NavbarBrand  className='text-light' style={{fontWeight:"900",fontSize:"20px"}}><span style={{fontSize:"30px",color:"gold"}}>F</span>ILIM GALLARY</NavbarBrand>
 
  
  </NavLink>
  <div className="btn-group ml-auto mt-4">

  {
    InsideLogin?(
      <p style={{color:"black"}}>text</p>
    ):(
       <Button variant="danger" onClick={logout}>Log out</Button>
    )
  }
 

  </div>
  
      
    
   
  
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    </Container>
  </Navbar>   
        
      ) : (
        <Navbar collapseOnSelect expand="lg" className='nav'  style={{background:"none",position:"relative"}}>
    
        <Container>
         <Link to={'/'} spy={true} smooth={true} offset={50} duration={500}><Navbar.Brand href="" className='text-light' style={{fontWeight:"900",fontSize:"20px"}}><span style={{fontSize:"30px",color:"gold"}}>F</span>ILIM GALLARY</Navbar.Brand></Link> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto text-white ">
            <Link to={'outer'} spy={true} smooth={true} offset={50} duration={500}><Nav.Link href="" className='m-2 text-white' style={{ fontFamily: "Alegreya Sans SC, sans-serif",fontWeight:"bolder",fontSize:"20px",}}>HOME</Nav.Link></Link>
            <Link to={'features'} spy={true} smooth={true} offset={5} duration={500}>  <Nav.Link href="#features" className='m-2 text-white'  style={{ fontFamily: "Alegreya Sans SC, sans-serif",fontWeight:"bolder",fontSize:"20px"}}>FEATURES</Nav.Link></Link>
            <Link to={'review'} spy={true} smooth={true} offset={50} duration={500}> <Nav.Link href="#review" className='m-2 text-white'  style={{ fontFamily: "Alegreya Sans SC, sans-serif",fontWeight:"bolder",fontSize:"20px"}}>REVIEWS</Nav.Link></Link>
            <Link to={'about'} spy={true} smooth={true} offset={50} duration={500}> <Nav.Link href="#pricing" className='m-2 text-white'  style={{ fontFamily: "Alegreya Sans SC, sans-serif",fontWeight:"bolder",fontSize:"20px"}}>ABOUT</Nav.Link></Link>
            </Nav>
         
          </Navbar.Collapse>
        </Container>
      </Navbar>   
       
      )}
    

      


 

   
  
     </div>
    </>
  )
}

export default Header