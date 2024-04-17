import React, { useState } from 'react'
import Header from '../components/Header'
import "../pages/dashboard.css"
import Add from '../components/Add';
import View from '../components/View';
import Col from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row'; 
import Footer from '../components/Footer';



function Dashboard() {
  const [uploadVideoResponse,setuploadVideoResponse]=useState({})
  return (
    <>
    <Header insidedashboard/>
    <div className='container-fluid '
       style={{
         backgroundImage: `url('https://external-preview.redd.it/j4XGxFOWzsC-JExJHa0Idv-kdfd45YnyXrpEgjOwkpE.jpg?width=1080&crop=smart&auto=webp&s=3467a1cbe3eab73ff5fc14c29c1fee0fe80db8f5')`,
         backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         height:"100vh",
         position:"relative",
      
         
         
       }}
    >
       <div id='bannertext'>
        <h1 className='text-center'>Hello user, add your movie review here.</h1>

       </div>
       <div className='button'>
      <Add setuploadVideoResponse={setuploadVideoResponse}/>
       </div>

       <div className='container-fluid w-100  '>
       <Row>
        <Col>

          <View  uploadVideoResponse={uploadVideoResponse} />
         

        </Col>
  
        </Row> 
      

    
    

        </div>

        </div>

      


    
  


    <Footer/>
    </>
  )
}

export default Dashboard