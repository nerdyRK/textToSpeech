const express = require("express");
const app = express();
const parser = require("pdf-parse");
const fileUplaod = require("express-fileupload");
const pdfParse = require("pdf-parse");

app.use(fileUplaod());
app.use("/", express.static("public"));

app.post("/extract-text", (req, res) => {
  pdfParse(req.files.pdfFile).then((data) => {
    res.send(data.text);
  });
});

app.listen(5000);
