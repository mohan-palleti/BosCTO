import React from "react";

function Category() {
  return (
    <div>
      <div className="container category">
        <div className="row">
          <div className="col">
            <div className="card bg-dark text-white shadow bg-body ">
              <img
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                className="card-img"
                alt="my pets"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">My Pets</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white shadow bg-body">
              <img
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                className="card-img"
                alt="my pets"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">Add New Pet</h2>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-dark text-white shadow bg-body">
              <img
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
                className="card-img"
                alt="my pets"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">My Bookings</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <div className="card bg-dark text-white shadow bg-body">
              <img
                src="https://images.pexels.com/photos/6568950/pexels-photo-6568950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="card-img"
                alt="my pets"
              />
              <div className="card-img-overlay">
                <h2 className="card-title">All Pet Stores</h2>
              </div>
            </div>
          </div>
          <div className="col">box-5</div>
          <div className="col">box-6</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
