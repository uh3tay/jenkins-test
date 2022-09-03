const express = require("express");

const app = express();

app.get("/", (req, res) => {
  //res.status(200).json("Hello world");
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello world\n')
});

module.exports = app.listen(process.env.PORT || 4000, () =>
  console.log(`Running on http://localhost:4000`)
);
