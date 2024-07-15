const express = require("express");
const app = express();
const port = 3000;
const pokemonRoutes = require("./routes/pokemonRoutes");
const attackRoutes = require("./routes/attackRoutes");

require("dotenv").config();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the pokemon routes
app.use("/pokemon", pokemonRoutes);
app.use("/attack", attackRoutes);

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// const express = require("express");
// const path = require("path");
// const pokemonRoutes = require("./routes/pokemonRoutes");

// const app = express();
// const port = 3000;

// require("dotenv").config();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Use the pokemon routes
// app.use("/pokemon", pokemonRoutes);

// // Serve the React app
// app.use(express.static(path.join(__dirname, "client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
