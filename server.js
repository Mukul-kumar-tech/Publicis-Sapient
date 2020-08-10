const next = require("next");
const express = require("express");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const bodyParser = require("body-parser");

app.prepare().then(() => {
  const server = express();

  //parse application/x-www-form-urlencoded
  server.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  server.use(bodyParser.json());

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
