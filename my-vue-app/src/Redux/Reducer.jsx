import { combineReducers } from "redux";
let x = [
  {
    id: 1,
    name: "roshan PEtx",
    city: "https://png.pngtree.com/png-clipart/20190820/ourlarge/pngtree-linear-india-mumbai-traditional-architecture-icon-minimalistic-logo-png-image_1642266.jpg",
    capacity: 10,
    address: "mumbai",
    costperday: 200,
    verified: "YES",
    Rating: 4,
  },
  {
    id: 2,
    name: "Priya PEtx",
    city: "https://rapidpark.in/assets/img/clients/delhi.png",
    capacity: 14,
    address: "mumbai",
    costperday: 400,
    verified: "YES",
    Rating: 3,
  },
  {
    id: 3,
    name: "anjali PEtx",
    city: "https://cdn.iconscout.com/icon/free/png-256/chennai-1-119692.png",
    capacity: 23,
    costperday: 200,
    address: "mumbai",
    verified: "YES",
    Rating: 4,
  },
  {
    id: 4,
    name: "Raj PEtx",
    city: "https://png.pngtree.com/png-clipart/20190820/ourlarge/pngtree-linear-india-mumbai-traditional-architecture-icon-minimalistic-logo-png-image_1642266.jpg",
    capacity: 17,
    costperday: 500,
    address: "mumbai",
    verified: "YES",
    Rating: 2,
  },
];
let prevDta = JSON.parse(localStorage.getItem("petdata"));
console.log("previos data", prevDta);
if (!prevDta) {
  console.log("local");
  localStorage.setItem("petdata", JSON.stringify(x));
}

const initialData = {
  pets: JSON.parse(localStorage.getItem("petdata")) || null,
};

const PETReducer = (state = initialData, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        pets: action.payload,
      };
    case "ADD_DATA":
      console.log("trying to add");
      let d = JSON.parse(localStorage.getItem("petData"));
      console.log("prev", d);
      let x = [...state.pets, action.payload];
      console.log("setting", x);
      localStorage.setItem("petdata", JSON.stringify(x));
      return {
        ...state,
        pets: [...state.pets, action.payload],
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  PETReducer,
});

export default rootReducer;
