import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
function Petstore() {
  let { id } = useParams();
  let Storedetails = useSelector((state) => state.PetData.PETReducer.pets);
  //console.log(Storedetails);
  let petstore = Storedetails.filter((e, i) => e.id == id);
  console.log(petstore);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <h4 className="m-0">Store details</h4>
      <div className="d-flex w-50 m-auto mt-5 p-5">
        <div className="text-start w-50">
          <span>
            <h5>About {petstore[0].name}</h5>
            Boarding facilities you leave em we love them
          </span>
          <p>
            Number of pets that will be watched at one time <br />
            {petstore[0].capacity}
          </p>
          <p>
            Accepted Pet Types Dog Cats Rabbits Accepted Pet size <br /> 1-5kg
            5-10kg 10-20kg 20-40kg 40+kg 40+kg Level of adult supervision.
          </p>
          <p> Pets will never be left unattended</p>
          <p>
            ree roam of the house The place your pet will sleep at night.
            Wherever they want The number of potty breaks provided per day. Full
            access outside The number of walks provided per day. <br />
            22 The type of home I stay in. <br /> House My outdoor area size.{" "}
            <br /> Large Emergency transport. <br /> Yes
          </p>
        </div>
        <div className="w-50 p-5">
          <img src={petstore[0].city} width="100%" alt="city" />
        </div>
      </div>

      {/* <details>
        About Wiggle Bubble Pets Services Summary. Boarding facilities you leave
        em we love them Number of pets that will be watched at one time. 8
        Accepted Pet Types Dog Cats Rabbits Accepted Pet size 1-5kg 5-10kg
        10-20kg 20-40kg 40+kg 40+kg Level of adult supervision. Pets will never
        be left unattended The place your pet will be if they are left
        unsupervised at home. Free roam of the house The place your pet will
        sleep at night. Wherever they want The number of potty breaks provided
        per day. Full access outside The number of walks provided per day. 22
        The type of home I stay in. House My outdoor area size. Large Emergency
        transport. Yes
      </details> */}
    </motion.div>
  );
}

export default Petstore;
