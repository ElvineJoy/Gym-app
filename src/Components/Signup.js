import React from 'react';


const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle signup
  };

  return (
    <div className="container-md">
      <h2 className="text-center lh-lg mt-5">SIGNUP</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <div className="row mb-3 mt-5">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="username" name="username" />
            </div>
        </div>
       </div> 
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword3" />
      </div>
    </div>
        <button type="button" className="btn btn-success btn-sm">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
