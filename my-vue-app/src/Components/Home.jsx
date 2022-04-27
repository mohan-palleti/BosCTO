import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";
import { motion } from "framer-motion";

function Home() {
  let v =
    "https://media.istockphoto.com/vectors/cat-paw-dog-paw-kitten-puppy-foot-print-vector-seamless-pattern-vector-id884082774?s=612x612";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <Table />
    </motion.div>
  );
}

export default Home;
