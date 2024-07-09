const express = require("express");
const connectDB = require("./src/config/db");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5001;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./src/routes/post.routes"));
app.use("/user", require("./src/routes/user.routes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => console.log(`Server running on port ${port}`));