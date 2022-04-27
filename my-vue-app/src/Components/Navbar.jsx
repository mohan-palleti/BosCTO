import React from "react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            PetCare
            <img
              className="img-fluid w-25"
              src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-puppy-dog-training-flaticons-flat-flat-icons.png"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn border"
                onClick={() => {
                  navigate("/listing/create");
                }}
              >
                Add{" "}
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default memo(Navbar);
