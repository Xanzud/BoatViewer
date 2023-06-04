const axios = require("axios");
const qs = require("qs");

async function getToken() {
  const data = qs.stringify({
    client_id: "xanzud@gmail.com:BoatViewer",
    client_secret: "itZemRo54YjkwmFo",
    grant_type: "client_credentials",
    scope: "api",
  });

  try {
    const response = await axios.post(
      "https://id.barentswatch.no/connect/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Erros: ", error);
  }
}

module.exports = getToken;

/*
const getToken = async () => {
  const data = qs.stringify({
    client_id: "xanzud@gmail.com:BoatViewer",
    client_secret: "itZemRo54YjkwmFo",
    grant_type: "client_credentials",
    scope: "api",
  });

  try {
    const response = await axios.post(
      "https://id.barentswatch.no/connect/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Erros: ", error);
  }
};
*/
