import React from "react";

function SignUp() {
  return (
    <div>
      <h2 className="mt-5">Create a New Account</h2>

      <div
        className="card m-auto mt-5 shadow p-3 mb-5 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <div className="row g-3 align-items-center p-2">
          <div className="col-auto">
            <label className="col-form-label">Email Address</label>
          </div>
          <div className="col-auto">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
        </div>
        <div className="row g-3 align-items-center p-2">
          <div className="col-auto">
            <label className="col-form-label">Password</label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="col-auto">
            <span className="form-text">Must be 8-20 characters long.</span>
          </div>
        </div>
        <button type="button" class="btn btn-warning">
          Sign-Up
        </button>
        <div className="col-auto">
          <span className="form-text">
            By Signing Up, <b> I agree to Terms and Conditions. </b>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
