import React, { useState ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from '../firebase';
import {getAuth} from "firebase/auth";

const Reg = () => {
  //for navigation 
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/")
      }
    })
  }, [navigate])

  const [fname, setfname] = useState('ishrat');
  const [lname, setlname] = useState('');
  const [repass, setRePass] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handlefnameChange = (e) => {
    setfname(e.target.value);
  };
  const handlelnameChange = (e) => {
    setlname(e.target.value);
  };
  const handleEmailnameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleRePasswordChange = (e) => {
    setRePass(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
   
    createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            let user = userCredential.user
            if(user){
                alert("User Register SuccessFully")
            }
        })
        .catch((error) => {
            alert(error.message)
        })


    //send data to mySql Database
    fetch('http://localhost/R53/React/finalproject/src/api/reg.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fname, lname, email, password, repass }),
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
        alert('Registration Successful');

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  return (
    <>

      <div class="container">

        <form onSubmit={handleRegistration} class="mt-5">
          <h2 class="text-warning">Sign Up</h2>

          <div class="form-group">
            <label class="form-label" for="">First Name</label>
            <input value={fname} onChange={handlefnameChange} name="fname" class="form-control" type="text" />
          </div>

          <div class="form-group">
            <label class="form-label" for="">Last Name</label>
            <input value={lname} onChange={handlelnameChange} name="lname" class="form-control" type="text" />
          </div>

          <div class="form-group">
            <label class="form-label" for="">Email</label>
            <input value={email} onChange={handleEmailnameChange} name="email" class="form-control" type="email" />
          </div>

          <div class="form-group">
            <label class="form-label" for="">Password</label>
            <input value={password} onChange={handlePasswordChange} name="title" class="form-control" type="password" />
          </div>

          <div class="form-group">
            <label class="form-label" for="">Re-type Password</label>
            <input value={repass} onChange={handleRePasswordChange} name="repass" class="form-control" type="password" />
          </div>

          <button class="btn btn-warning mt-3">Sign Up</button>

        </form>

      </div>
      

    </>
  )
}
export default Reg;
