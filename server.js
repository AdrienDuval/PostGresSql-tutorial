const express = require("express");
const studentRoutes = require("./src/students/routes");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
