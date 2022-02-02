//create connection to express

const express = require("express"); // refers to the dependencies in package.json

const app = express();

const cars = [
  { id: 1, make: "Tesla", year: "2023", model: "X" },
  { id: 2, make: "Mercedes", year: "2022", model: "G-Wagon" },
  { id: 3, make: "Nissan", year: "2025", model: "Sentra" },
  { id: 4, make: "Audi", year: "2023", model: "A4" },
  { id: 5, make: "GMC", year: "2019", model: "Yukon" },
];

//get all cars
app.get("/", (request, response) => {
  response.send(cars);
});

//get only my future Audi
app.get("/car/:carId", (req, res) => {
  console.log("this is my request.params ======>", req.params);

  //extracting carId from req.params
  const { carId } = req.params;

  res.send(cars[carId]);
});

app.listen(3000, () => {
  console.log("API listening on port 3000");
});
