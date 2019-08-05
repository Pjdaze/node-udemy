const request = require("request");

const geocode = (address, getCode) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoicGpkdXhtYXAiLCJhIjoiY2p5cWFkemg3MDBiNDNjcDd5d2Q4dHFhdyJ9.IiiuWsgmKc-aVLmUHh2-2g";

  request({ url: url, json: true }, (err, res) => {
    if (err) {
      getCode("Unable to connect to service!", undefined);
    } else if (res.body.features.length === 0) {
      getCode("Unable to find location, Try another search", undefined);
    } else {
      const info = res.body.features;

      const City = info[0].place_name;
      const longitude = info[0].center[0];
      const latitude = info[0].center[1];

      getCode({
        City,
        latitude,
        longitude
      });
    }
  });
};

module.exports = geocode;
