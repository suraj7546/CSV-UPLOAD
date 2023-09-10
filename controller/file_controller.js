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
module.exports.delete = async (req, res) => {
  try {
    const deleteFile = await CSV.findOne({ file: req.params.id });
    console.log(req.params.id);
    if (deleteFile) {
      await CSV.deleteOne({ file: req.params.id });
      return res.redirect("/");
    } else {
      console.log("file not found for delete");
      return res.redirect("/");
    }
  } catch (error) {
    if (error) {
      console.log(`error on file_controller ${error}`);
    }
  }
};
module.exports.view = async (req, res) => {
  try {
    let csvFile = await CSV.findOne({ file: req.params.id });
    const results = [];
    const header = [];
    fs.createReadStream(csvFile.filePath) //seeting up the path for file upload
      .pipe(csvParser())
      .on("headers", (headers) => {
        headers.map((head) => {
          header.push(head);
        });
        // console.log(header);
      })
      .on("data", (data) => results.push(data))
      .on("end", () => {
        // console.log(results.length);
        // console.log(results);
        res.render("view", {
          title: "File Viewer",
          fileName: csvFile.fileName,
          head: header,
          data: results,
          length: results.length,
        });
      });
  } catch (error) {
    console.log("Error in viewController/view", error);
    return;
  }
};
