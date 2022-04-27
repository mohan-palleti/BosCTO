import React, { useState } from "react";
import Navbar from "./Navbar";
import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ADD_Data } from "../Redux/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AddpetStore() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(ADD_Data(data));
  };
  const [adding, setAdding] = useState(null);
  const mumbai =
    "https://png.pngtree.com/png-clipart/20190820/ourlarge/pngtree-linear-india-mumbai-traditional-architecture-icon-minimalistic-logo-png-image_1642266.jpg";
  const delhi = "https://rapidpark.in/assets/img/clients/delhi.png";
  const Kolkata = "https://img.icons8.com/bubbles/500/kolkata.png";
  const chennai =
    "https://cdn.iconscout.com/icon/free/png-256/chennai-1-119692.png";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <h2 className="mt-5">Add new Store</h2>

      <div
        className="w-75 m-auto mt-5 shadow p-3 mb-5 bg-body rounded"
        style={{ width: "18rem" }}
      >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="container d-flex">
            <div className="me-5">
              <div className="box-1">
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">Store Name</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Store Name"
                      {...register("name", { required: true })}
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">Address</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                      {...register("address", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="box2">
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">Verified</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Verified"
                      {...register("verified", { required: true })}
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">Capacity</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Capacity"
                      {...register("capacity", { required: true })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="box3">
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">Cost Per Day</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Cost Per Day"
                      {...register("costperday", { required: true })}
                    />
                  </div>
                </div>{" "}
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">Rating</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Rating"
                      {...register("Rating", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <div className="box4">
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">City</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="city"
                      {...register("city", { required: true })}
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center p-2">
                  <div className="col-auto">
                    <label className="col-form-label">ID</label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="ID"
                      {...register("id", { required: true })}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>Note:</p>
              <p>We are available Only in Delhi , Mumbai , Chennai ,Kolkata </p>
              <div className="d-flex">
                <div>
                  <p>To add Delhi </p>
                  <CopyToClipboard text={delhi}>
                    <p className="btn text-success">
                      Click me and paste in city
                    </p>
                  </CopyToClipboard>
                </div>
                <div>
                  <p>To add mumbai </p>
                  <CopyToClipboard text={mumbai}>
                    <p className="btn text-warning">
                      Click me and paste in city{" "}
                    </p>
                  </CopyToClipboard>
                </div>
                <div>
                  <p>To add Kolkata </p>
                  <CopyToClipboard text={Kolkata}>
                    <p className="btn text-primary">
                      Click me and paste in city{" "}
                    </p>
                  </CopyToClipboard>
                </div>
                <div>
                  <p>To add Chennai</p>
                  <CopyToClipboard text={chennai}>
                    <p className="btn text-danger">
                      Click me and paste in city
                    </p>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-warning"
            onClick={() => {
              setAdding(true);
              setTimeout(() => {
                navigate("/");
              }, 700);
            }}
          >
            Add Store
          </button>
          {adding && <p>Adding</p>}
        </form>
      </div>
    </motion.div>
  );
}

export default AddpetStore;
