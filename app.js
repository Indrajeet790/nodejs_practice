const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, resp) => {
  resp.send("hlo dear");
});

app.get("/about", () => {
  resp.send("this is my about page");
});

app.listen(port, (err) => {
  if (err) {
    console.log("err");
  } else {
    console.log("server is running on port 7000");
  }
});
