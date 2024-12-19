import request from "postman-request";

const url =
  "https://api.weatherstack.com/current?access_key=60d7502dde9e276a9d963de1b91cce4c&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service");
  } else {
    console.log(
      response.body.current.weather_descriptions[0] +
        " degrees out, it feels like " +
        response.body.current.feelslike +
        " degrees out."
    );
  }
  //   console.log(response.body.current);
});
