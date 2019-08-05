const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("toa baja", (err, data) => {
  if (err) {
    return console.log(err);
  }

  forecast(data.latitude, data.longitude, forecastData => {
    if (err) {
      return console.log(err);
    }

    console.log(data.location);
    console.log(forecastData);
  });
});
