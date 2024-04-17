import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';

import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';
import { db } from '../Firebase';
function Add({setuploadVideoResponse}) {

  
 const videocollectionref=collection(db,"allVideos")
 const [Id,setID]=useState("");
 const [MovieName,setMovieName]=useState("");
 const [ImageURL,setImageURL]=useState("");
 const [Review,setReview]=useState("");
 const [MovieURL,setMovieURL]=useState("");

  const getyoutubeLink =(e)=>{
    
    const {value}=e.target;
    console.log(value);
    if(value.includes("v=")){
         
      let VID=value.split("v=")[1].slice(0,11)
      console.log(`https://www.youtube.com/embed/${VID}`)
      setMovieURL(`https://www.youtube.com/embed/${VID}`)
    }else{

      setMovieURL("")
    }

  }

  const postdata= async()=>{

    if(!Id,!MovieName,!ImageURL,!Review,!MovieURL){

      alert("please insert all feilds")
    }else{
       const result=await addDoc(videocollectionref,{
      Id:Id,
      imgUrl:ImageURL,
      moviename:MovieName,
      movieurl:MovieURL,
      review:Review

  })

  alert("movie Review Added Successfully");
  console.log(result)
  
  setuploadVideoResponse(result.videocollectionref);

  setID("");
  setImageURL("");
  setMovieName("");
  setMovieURL("");
  setReview("");
  handleClose()
    }
   
}

  


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  

  return (
    <> 
    <div className='d-flex align-items-center justify-content-center'>

<Button variant="dark"className='fw-bolder' onClick={handleShow} style={{marginTop:"-150px"}}>
     ADD MOVIE HERE 
      </Button>
   </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>ADD MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
      <FloatingLabel
        controlId="floatingInputId"
        label="Video Id"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Video Id" valu="id"
        onChange={(e)=>setID(e.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Movie Name">
        <Form.Control type="text" placeholder="Movie Name" onChange={(e)=>setMovieName(e.target.value)}   />
      </FloatingLabel>
      <br />

      <FloatingLabel
        controlId="floatingInputImage"
        label="Image URL"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Enter Image URL" onChange={(e)=>setImageURL(e.target.value)}  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Video URL">
        <Form.Control type="text" placeholder="Enter Video URL"  onChange={getyoutubeLink}  />
      </FloatingLabel>

      <FloatingLabel className="mt-4" label="Movie Review" controlId="exampleForm.ControlTextarea1" >
        
        
        <Form.Control as="textarea" rows={3} placeholder="Enter your Movie Review " onChange={(e)=>setReview(e.target.value)} />
      </FloatingLabel>
      <br />
      </Form>
      
      </Modal.Body>
        <Modal.Footer style={{height:"50px",marginTop:"20px"}}>

  
          
          <Button variant="primary" className='btn-dark' style={{marginTop:"38%"}} onClick={postdata}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
 
  )
}

export default Add