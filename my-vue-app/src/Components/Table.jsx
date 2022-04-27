import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Table() {
  let navigate = useNavigate();
  const [fcity, setFcity] = useState("");
  const [fverified, setFverified] = useState("");
  let pet = useSelector((state) => state.PetData.PETReducer.pets);
  console.log(pet);
  const [petData, setPetData] = useState(pet);
  const sort_arr = (type, v) => {
    if (type === "rating" && v === "ASC") {
      let x = petData.sort((a, b) => parseInt(a.Rating) - parseInt(b.Rating));
      setPetData([...x]);
    } else if (type === "rating" && v === "DSC") {
      let x = petData.sort((a, b) => parseInt(b.Rating) - parseInt(a.Rating));
      setPetData([...x]);
    }
    if (type === "cost" && v === "ASC") {
      let x = petData.sort(
        (a, b) => parseInt(a.costperday) - parseInt(b.costperday)
      );
      setPetData([...x]);
    } else if (type === "cost" && v === "DSC") {
      let x = petData.sort(
        (a, b) => parseInt(b.costperday) - parseInt(a.costperday)
      );
      setPetData([...x]);
    }
  };
  const filter_arr = (v, c) => {
    setFcity(c);
    setFverified(v);
  };
  //console.log(pet);
  return (
    <div>
      <div className="text-end d-flex justify-content-around w-50 m-auto">
        <select
          name="location"
          id=""
          className="form-select form-select-sm "
          onChange={(e) => {
            filter_arr("", e.target.value);
          }}
        >
          <option value=""> Filter location</option>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="chennai">Chennai</option>
        </select>
        <select
          name="verified"
          id=""
          className="form-select form-select-sm "
          onChange={(e) => {
            filter_arr(e.target.value, "");
          }}
        >
          <option value="">Filter on Verified</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        <select
          name="sortRating"
          id=""
          className="form-select form-select-sm "
          onChange={(e) => {
            sort_arr("rating", e.target.value);
          }}
        >
          <option value="">Sort on Rating</option>
          <option value="ASC">Low-High</option>
          <option value="DSC">High-Low</option>
        </select>
        <select
          name="sortCost"
          id=""
          className="form-select form-select-sm "
          onChange={(e) => {
            sort_arr("cost", e.target.value);
          }}
        >
          <option value="">Sort on Cost</option>
          <option value="ASC">Low-High</option>
          <option value="DSC">High-Low</option>
        </select>
      </div>
      <table className="table bg-light w-75 border m-auto">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Capacity</th>
            <th scope="col">Cost per Day</th>
            <th scope="col">Verified</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          {petData
            .filter(
              (ele) =>
                ele.city.includes(fcity) && ele.verified.includes(fverified)
            )
            .map((ele, i) => (
              <>
                <tr
                  key={ele.id}
                  onClick={() => {
                    navigate(`/listing/${ele.id}`);
                  }}
                >
                  <th scope="row">{+(i + 1)}</th>
                  <td>{ele.name}</td>
                  <td style={{ width: "20vw" }}>
                    <img src={ele.city} width="30%" alt="location" />
                  </td>
                  <td>
                    {" "}
                    <a href="https://www.google.com/maps">link</a>
                  </td>
                  <td>{ele.capacity}</td>
                  <td>{ele.costperday}</td>
                  <td>{ele.verified}</td>
                  <td>{ele.Rating}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
