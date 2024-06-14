
import React from 'react';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login
  };

  return (
    <div class= "container-sm">
      <h2 class="text-center">Login</h2>
      <form onSubmit={handleSubmit}>
      <div class="row mb-3">
        <label for="inputUsername1" class="col-sm-2 col-form-label">Username:</label>
        <div class="col-sm-10">
         <input type="username" class="form-control" id="inputUsername1" />
       </div>
     </div>
        <div class="row mb-3">
          <label htmlFor="inputEmail3" class="col-sm-2 col-form-label">Email:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" />
        </div>
      </div>
      <div class="row mb-3">
        <label htmlFor="inputPassword1" class="col-sm-2 col-form-label">Password:</label>
        <div class="col-sm-10">
         <input type="password" class="form-control" id="inputPassword1" />
       </div>
     </div>
     
        <button type="button" class="btn btn-primary btn-sm">Login</button>
      </form>
    </div>
    
  );
};

export default Login;
