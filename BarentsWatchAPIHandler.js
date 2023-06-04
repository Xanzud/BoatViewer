function fetchRequestBarentsWatchAPIToken() {
  fetch("https://id.barentswatch.no/connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "client_id=xanzud@gmail.com:BoatViewer&scope=api&client_secret=itZemRo54YjkwmFo&grant_type=client_credentials",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      barentsWatchAPIToken = data;
    })
    .catch((error) => {
      console.error("ERROR:", error);
    });
}

var barentsWatchAPIToken = "";

/*
class BarentsWatchAPIHandler {
    constructor(apiRequest) {
        this.apiRequest = apiRequest;
    }

    fetch()
}
*/
