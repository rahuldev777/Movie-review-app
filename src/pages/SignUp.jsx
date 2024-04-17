import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';



function SignUp() {

  const [email,Setemail]=useState("")
  const [password,Setpassword]=useState("")

  const navigate=useNavigate()
 

  const signupfunc=()=>{

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user)
      

      alert("sign up sucessfull")
      navigate("/login")
    })
    .catch((error) => {
 
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..
    });
  }

  return (
    <> 
     <Header InsideLogin/>
    <h1 className='text-center mb-3' style={{fontSize:"60px",fontWeight:"bolder",color:"#696564"}}>Sign Up Here</h1>
    <div className='d-flex align-items-center justify-content-center ' >
    
      <div className='container  ' >
        <div className='card shadow mt-4'style={{position:"absolute",padding:"20px",width:"950px",marginLeft:"200px",height:"350px"}}>
    
          
          <div className='row align-items-center'>
    
            <div className='col-6 rounded-start'>
              <img src="https://images.saymedia-content.com/.image/t_share/MTc1MTEyMjU0ODE0MTAyNjIz/hollywood_-_the_history_of_a_movie_capital.jpg" className='rounded w-100' alt="" srcset="" />
    
            </div>
            <div className='col-6'>
     <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>Setemail(e.target.value)}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>Setpassword(e.target.value)} />
          </Form.Group>
          <Button variant="secondary"  onClick={signupfunc} style={{marginTop:"150px"}}>
            Sign Up
          </Button>

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

export default SignUp