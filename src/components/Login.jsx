import React from 'react'

function Login() {
    return (
        
        <div className="row">
            <h1> Login </h1>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Insert password" />
            </div>
            <div className="mb-3">
            <button type="button" className="btn btn-dark">Login</button>
            </div>
        </div>
      
    )
}

export default Login
