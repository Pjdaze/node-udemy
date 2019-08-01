const request = require("request");
//
//const url =
//  "https://api.darksky.net/forecast/5b931be313009db3ae89893d6eb550ed/37.8267";
//
//request(
//  {
//    url: url,
//    json: true
//  },
//  (error, res) => {
//    if (error) {
//      console.log("Unable To Connect");
//    } else if (res.body.error) {
//      console.log("Unable To Find Location");
//    } else {
//      const forecast = `I'ts currently ${
//        res.body.currently.temperature
//      } degrees out. There is a ${
//        res.body.currently.precipProbability
//      } chance of Rain!`;
//      console.log(forecast);
//    }
//  }
//);s

//const GeocodeURL =
//  "https://api.mapbox.com/geocoding/v5/mapbox.places///40.733.json?access_token=pk.eyJ1IjoicGpkdXhtYXAiLCJhIjoiY2p5cWFkemg3MDBiNDNjcDd5d2Q4dHFhdyJ9.//IiiuWsgmKc-aVLmUHh2-2g&limit=1";
//request(
//  {
//    url: GeocodeURL,
//    json: true
//  },
//  (error, res) => {
//    if (error) {
//      console.log("Unable To Connect");
//    } else if (res.body.error) {
//      console.log("Unable To Find Location");
//    } else if (!res.body.search) {
//      console.log("You are not searching for a location bud");
//    } else {
//      const forecast = res.body.features;
//
//      const City = forecast.map(x => x.place_name);
//      const Longitude = forecast.map(x => x.center[0]);
//      const Latitude = forecast.map(x => x.center[1]);
//
//      console.log(
//        `This are the cordenates for ${City}: Longitude ${Longitude}, Latitude ${Latitude}  `
//      );
//    }
//  }
//);


const geocode = (address, getCode) => {


  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicGpkdXhtYXAiLCJhIjoiY2p5cWFkemg3MDBiNDNjcDd5d2Q4dHFhdyJ9.IiiuWsgmKc-aVLmUHh2-2g';

  request({url: url, json: true}, (err, res) => {

if(err){
  getCode('Unable to connect to service!');
} else if(res.body.features.length === 0){
  getCode('Unable to find location, Try another search');
} else {
   const forecast = res.body.features;

  const City = forecast.map(x => x.place_name);
  const Longitude = forecast.map(x => x.center[0]);
const Latitude = forecast.map(x => x.center[1]);



}

})

}



geocode('or88767ndo', (err, data) => {

console.log('Error', err);
console.log('Data', data);
})
