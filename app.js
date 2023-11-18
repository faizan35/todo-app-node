const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

routes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
