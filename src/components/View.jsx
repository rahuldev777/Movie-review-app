import React, { useEffect, useState } from 'react'
import Moviecard from './Moviecard'
import { Col, Row } from 'react-bootstrap'
import {db} from "../Firebase"
import {  getDocs,collection } from 'firebase/firestore';


function View({uploadVideoResponse}) {

  const [Allvideos,setAllvideos]=useState([]);
  const[deleteVideoResponse,setdeleVideoResponse]=useState(false)

  const videoRef=collection(db,"allVideos")

  const getdata=async ()=>{
     const data=await getDocs(videoRef)
    
     const filterddata=data.docs.map((doc)=>({
       ...doc.data(),
      id:doc.id
      
     }
    ))
    setAllvideos(filterddata)
  }

  useEffect(()=>{

    getdata();
    setdeleVideoResponse(false)

  },[deleteVideoResponse,uploadVideoResponse])

  return (
    <>
    <Row>
      {
        Allvideos?.length>0?Allvideos.map(video=>(
 <Col sm={12} md={4} lg={3} >
        <Moviecard video={video} setdeleVideoResponse={setdeleVideoResponse} />
        
       
        </Col>

        )):<p className='text-danger fw-bolder'>no data to be shown</p>
        
      }
       
    </Row>
    </>
  )
}

export default View