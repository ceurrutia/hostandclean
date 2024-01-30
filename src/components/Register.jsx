import React from 'react'

function Register() {
  return (
    <div>
       
        <div className="row">
            <h1> Register as new user </h1>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name and surname</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name and surname" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Insert password" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Repeat password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Reinsert password" />
            </div>
            <div className="mb-3">
            <button type="button" className="btn btn-dark">Register</button>
            </div>
        </div>
       </div>
    
  )
}

export default Register
