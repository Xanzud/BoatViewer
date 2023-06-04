const express = require("express");
const axios = require("axios");
const qs = require("qs");
const app = express();
const port = 3000;

const getToken = require("./getToken");

app.get("/get-token", async (req, res) => {
  const token = await getToken();
});

app.listen(port, () => {
  console.log("Server listening at http://locaohost:$(port)");
});
