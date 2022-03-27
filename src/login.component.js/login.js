//import { useState } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Form,Buttom } from 'react-bootstrap';

export function Login()
{
// let { email,setEmail}= useState("sakshamkadayat@gmail.com");
// let { password,setPassword}= useState();

return(
<>

<form className="row g-3">
  <div className="col-md-6">
    <label for="inputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail"/>
  </div>
  <div className="col-md-6">
    <label for="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword"/>
  </div>
  <div className="col-12">
    <label for="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>

  <div className="col-12">
    <label for="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
</form>

</>



);

}