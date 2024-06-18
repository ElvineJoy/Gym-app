
import React from 'react';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login
  };

  return (
    <div className= "container-md">
      <h2 className="text-center mt-5">LOGIN</h2>
      <form className="form-outline mb-4" onSubmit={handleSubmit}>
      <div className="row mb-3 mt-5">
        <label htmlFor="inputUsername1" className="col-sm-2 col-form-label">Username:</label>
        <div className="col-sm-10">
         <input type="username" className="form-control" id="inputUsername1" />
       </div>
     </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputPassword1" className="col-sm-2 col-form-label">Password:</label>
        <div className="col-sm-10">
         <input type="password" className="form-control" id="inputPassword1" />
       </div>
     </div>
        <button type="button" className="btn btn-primary btn-sm">Login</button>
      </form>
    </div>
    
  );
};

export default Login;
