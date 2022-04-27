import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
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
  console.log("keys from uuid", uuidv4());
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
      <table className="table bg-light w-75 border m-auto" key={uuidv4()}>
        <thead key={uuidv4()}>
          <tr key={uuidv4()}>
            <th key={uuidv4()} scope="col">
              Id
            </th>
            <th key={uuidv4()} scope="col">
              Name
            </th>
            <th key={uuidv4()} scope="col">
              City
            </th>
            <th key={uuidv4()} scope="col">
              Address
            </th>
            <th key={uuidv4()} scope="col">
              Capacity
            </th>
            <th key={uuidv4()} scope="col">
              Cost per Day
            </th>
            <th key={uuidv4()} scope="col">
              Verified
            </th>
            <th key={uuidv4()} scope="col">
              Rating
            </th>
          </tr>
        </thead>
        <tbody key={uuidv4()}>
          {petData
            .filter(
              (ele) =>
                ele.city.includes(fcity) && ele.verified.includes(fverified)
            )
            .map((ele, i) => (
              <>
                <tr
                  key={uuidv4()}
                  onClick={() => {
                    navigate(`/listing/${ele.id}`);
                  }}
                >
                  <th scope="row" key={uuidv4()}>
                    {+(i + 1)}
                  </th>
                  <td key={uuidv4()}>{ele.name}</td>
                  <td style={{ width: "20vw" }} key={uuidv4()}>
                    <img
                      key={uuidv4()}
                      src={ele.city}
                      width="30%"
                      alt="location"
                    />
                  </td>
                  <td key={uuidv4()}>
                    <a href="https://www.google.com/maps">link</a>
                  </td>
                  <td key={uuidv4()}>{ele.capacity}</td>
                  <td key={uuidv4()}>{ele.costperday}</td>
                  <td key={uuidv4()}>{ele.verified}</td>
                  <td key={uuidv4()}>{ele.Rating}</td>
                </tr>
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
