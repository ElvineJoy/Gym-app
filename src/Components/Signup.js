import React from 'react';


const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup
  };

  return (
    <div class="container-md">
      <h2 class="text-center lh-lg">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <div class="row mb-3">
            <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="username" name="username" />
            </div>
          
        </div>
       </div> 

        <div class="row mb-3">
          <label htmlFor="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" />
      </div>
    </div>
        <button type="button" class="btn btn-success btn-sm">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
