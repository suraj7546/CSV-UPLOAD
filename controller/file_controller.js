/** ------------------ IMPORTING PACKAGE/MODELS ------------------ **/
const fs = require("fs");
const csvParser = require("csv-parser");
const CSV = require("../models/csv");
const path = require("path");

/** ------------------ EXPORTING FUNCTION To upload a file ------------------ **/
module.exports.upload = async function (req, res) {
  try {
    // file is not present
    if (!req.file) {
      return res.status(400).send("No files were uploaded.");
    }
    // file is not csv
    if (req.file.mimetype != "text/csv") {
      return res.status(400).send("Select CSV files only.");
    }
    // console.log(req.file);
    let file = await CSV.create({
      fileName: req.file.originalname,
      filePath: req.file.path,
      file: req.file.filename,
    });
    return res.redirect("/");
  } catch (error) {
    console.log("Error in fileController/upload", error);
    res.status(500).send("Internal server error");
  }
};
