import React from 'react'

function FormSignup() {
    return (
        <div className="form-content-right">
          <form className="form">
              <h1> Get started with us today! Create your account by filling out the information below.</h1>
              <div className="form-inputs">
                  <label htmlFor="username" className="form-label">
                      <input type="text" name="username" className="form-input" placeholder="Enter your username"/>
                  </label>
              </div>
              <div className="form-inputs">
                  <label htmlFor="email" className="form-label">
                      <input type="email" name="email" className="form-input" placeholder="Enter your email"/>
                  </label>
              </div>
              </form>  
            
            
        </div>
    )
}

export default FormSignup
