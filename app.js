const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan"); // Import morgan
const port = process.env.PORT || 3010; // Fixed the port variable

// Morgan middleware
app.use(morgan("dev"));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// Import routes
app.use(require("./routes/index"));

app.listen(port, () => {
  console.log(`server on port: ${port}`);
});
