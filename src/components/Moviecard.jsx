import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../Firebase';






function Moviecard({video,setdeleVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeVideo= async(id)=>{

    const videodoc=doc(db,"allVideos",id);
    await deleteDoc(videodoc)
    setdeleVideoResponse(true)

  }

  return (
    <>
    <div style={{marginTop:"400px",position:"absolute"}} key={video.id}>
            <Card style={{ width: '18rem',height:"300px" }}>
      <Card.Img variant="top" src={video.imgUrl} height={"180px"} style={{width:"100%"}} onClick={handleShow}/>
      <Card.Body>
        <Card.Title className='fw-bolder'>Movie Name: {video.moviename}</Card.Title>
        <Card.Text>
          
        <Accordion defaultActiveKey="0" style={{marginTop:"20px",width:"200px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Review</Accordion.Header>
        <Accordion.Body>
        {video.review}
  
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      
       
      
        </Card.Text>
        <Button className='btn' style={{marginTop:"119px",marginLeft:"110px"}} onClick={()=>removeVideo(video.id)} ><i class="fa-solid fa-trash text-danger"></i></Button>
      </Card.Body>
    </Card>
    </div>


      

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
        {video.moviename}
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="526" src={`${video?.movieurl}?autoplay=1`} title="Hits Of KJ Yesudas | Evergreen Malayalam Songs of Yesudas |  Video Jukebox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen ></iframe>
        </Modal.Body>
        
     
      </Modal>
 </>
  )
}

export default Moviecard