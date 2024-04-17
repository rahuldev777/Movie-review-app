import React from 'react'
import '../pages/Home.css';
import sample from "../video/s2.mp4"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from '../components/Cards';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';





function Home() {

 

  return (
    <>
    <Header/>
    <div className='outer' id='outer'>

   
    <div className='video-container'>
    <video autoPlay loop muted id="background-video">
    <source src={sample} type="video/mp4" />
</video>
<div  className='d-flex align-items-center justify-content-center'>

<div class="centered" style={{fontSize:"70px",fontWeight:"bolder",width:"100%",marginLeft:"25%"}}>Welcome To Film Gallery </div>

</div>

<div className='d-flex align-items-center justify-content-center' >

  <div>
  <Link to={'/login'}>  <Button className='btn p-2'  variant="dark">Get Started +</Button> </Link> 

  </div>

</div> 
</div>
      </div>
      <div className='container-fluid bg-light mb-4 p-4'id='features'>
        <div className='feature '>
      <h2 className='text-center fe'  style={{fontSize:"60px",fontWeight:"bolder",color:"#696564"}}>Features</h2>
        </div>

        <div className='d-flex align-items-center justify-content-around mt-4'>
          <div>
            <Card className='shadow'   style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/video-editing-controller-machine-color-edit-post-video-production-many-button-control-panel-telecine-adjust-color-digital-video-movie-film-post-production-stage-editor-tools_258335-3738.jpg" />
      <Card.Body>
        <Card.Title>Managing Movie Trailer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
          <div>
            <Card className='shadow'   style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.hollywoodreporter.com/wp-content/uploads/2019/05/bongjoon-ho.jpg?w=1296" />
      <Card.Body>
        <Card.Title>Adding Movie Reviwes</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>

          <div>
            <Card className='shadow'  style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://murphatron.files.wordpress.com/2011/08/filmeditor2.jpg" height={"160px"} />
      <Card.Body>
        <Card.Title>Categorize Movie</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </div>
        



        </div>
      

      </div>

      <div className='container-fluid bg-light p-4' style={{height:"70vh",marginTop:"50px"}}>

      <h2 className='text-center fe' id='review' style={{fontSize:"60px",fontWeight:"bolder",color:"#696564"}}>Reviews</h2>

        
        <div>
         

          <Cards/>
        </div>
       
     



      </div>
      <div className='container ' style={{padding:"40px"}}>
        <div className='text-center'>
  <div  className='' id='about' style={{fontSize:"70px",fontWeight:"bolder",color:"#696564",marginBottom:"30px"}}>ABOUT </div>
        </div>

    

        <div className='row'>

          <div className='col-6'>
        <div className='d-flex align-items-center justify-content-center rounded' >
          <img src="https://memyselfandela.files.wordpress.com/2013/06/black-and-white-gif-she-lost-control-writing-favim-com-233498.gif" alt="" className='rounded' srcset="" height={"250px"} />
        </div>
          </div>
          <div className='col-6'>
          <h3 style={{color:"#696564"}} >Hello, movie fans. This is a personal movie review website where you may post movies you've watched as well as your own personal reviews.Features such as see trailer and review titles.</h3>

           </div>


        </div>

      </div>

    
      
     <Footer/>
      </>
  )
}

export default Home