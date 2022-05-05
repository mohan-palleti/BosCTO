require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

var cors = require("cors");

app.use(cors());

app.listen(PORT, async () => {
  try {
    //   await connect();
    console.log(`Server is running on ${PORT}`);
  } catch (err) {
    console.log(err);
  }
});
