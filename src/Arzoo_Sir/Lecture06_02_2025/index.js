const express = require("express");
const url = require("url");
const fs = require("fs");
const app = express();
const port = 3000;
app.get("/readfile", (req, res) => {
  //   var data = fs.readFileSync("data.json");
  //   res.send(data);
  fs.readFile("data.json", (err, data) => {
    if (err) throw err;
    else res.send(data);
  });
});
function readData() {
  var data = fs.readFileSync("data.json");
  data = JSON.parse(data);
  return data;
}
function saveData(data) {
  fs.writeFileSync("data.json", JSON.stringify(data));
}
app.get("/", (req, res) => {
  console.log(req.query.url);
  var parsedUrl = url.parse(req.query.url);
  if (parsedUrl.protocol && parsedUrl.hostname) {
    var shortcode = Math.floor(Math.random() * 100000);
    var data = readData();
    if (
      !data[shortcode] &&
      !Object.keys(data).find((k) => data[k] == parsedUrl.ref)
    )
      data[shortcode] = parsedUrl.href;
    saveData(data);
  }
  res.send("Hello World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
