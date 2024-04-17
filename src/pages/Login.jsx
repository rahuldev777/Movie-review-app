import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { AuthErrorCodes } from "firebase/auth";


function Login() {

 const  [loginemail,Setloginemail]=useState("");
 const [loginpassword,Setloginpassword]=useState("");
 const navigate =useNavigate()
 const cuser = auth.currentUser;


 
 const Loginfunc=()=>{

  if(!loginemail || !loginpassword){

    alert("please fill all the  fields")

    
  }else{


   signInWithEmailAndPassword(auth, loginemail, loginpassword).then((userCredential) => {
 
    const user = userCredential.user;
    console.log(user)
 
  navigate("/dashboard")
}).catch((err)=>{

  if (
    err.code === AuthErrorCodes.INVALID_PASSWORD ||
    err.code === AuthErrorCodes.USER_DELETED
  ){
    alert("Email and password are inccorct")
  }else {
    console.log(err.code);
    alert("Email and Password are incorrect");
  }

})

}



  
    







 }

  return (
    <>
    <Header InsideLogin/>
<h1 className='text-center mb-3' style={{fontSize:"60px",fontWeight:"bolder",color:"#696564"}}>Login Here</h1>
<div className='d-flex align-items-center justify-content-center ' >

  <div className='container  ' >
    <div className='card shadow mt-4'style={{position:"absolute",padding:"20px",width:"950px",marginLeft:"200px"}}>

      
      <div className='row align-items-center'>

        <div className='col-6 rounded-start'>
          <img src="https://static.displate.com/280x392/displate/2020-11-18/17e50ce84dfb996d7ec2db66f15c9461_a8eec61de3306f0aa9c60fd94838c989.jpg" className='rounded w-100' alt="" srcset="" />

        </div>
        <div className='col-6'>
 <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>Setloginemail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>Setloginpassword(e.target.value)} />
      </Form.Group>
      <Button variant="secondary" onClick={Loginfunc} style={{marginTop:"50px"}}>
        Login
      </Button>
      <p className='text-center' style={{marginTop:"120px"}}>New User <Link to={'/signup'}>Sign up </Link> Here</p>
    </Form>
        </div>

      </div>

    </div>

  </div>

</div>

   <Footer InsideLogin/> 
    </>
  )
}

export default Login