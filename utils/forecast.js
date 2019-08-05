const request = require("request");

const forecast = (latitude, longitude, getForecast) => {
  const url =
    "https://api.darksky.net/forecast/5b931be313009db3ae89893d6eb550ed/" +
    latitude +
    "," +
    longitude;

  request(
    {
      url: url,
      json: true
    },
    (err, res) => {
      if (err) {
        getForecast(undefined, "Unable To Connect");
      } else if (res.body.err) {
        getForecast(undefined, "Unable To Find Location");
      } else {
        getForecast(
          res.body.daily.data[0].summary +
            "I'ts currently" +
            res.body.currently.temperature +
            " degrees out. There is a" +
            res.body.currently.precipProbability +
            "chance of Rain!"
        );
      }
    }
  );
};

module.exports = forecast;
