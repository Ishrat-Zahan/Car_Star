import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>

      <div className="container">

        <form className="mt-5">
          <h2 className="text-warning">Log In</h2>

          <div className="form-group">
            <label className="form-label" for="">Email</label>
            <input name="title" class="form-control" type="email" />
          </div>
          <div className="form-group">
            <label className="form-label" for="">Password</label>
            <input name="title" class="form-control" type="password" />
          </div>

          <button className="btn btn-warning mt-3">Log In</button>

        </form>

      </div>


    </>
  )
}
export default Login;
