const express = require("express");
const { home } = require("../controller/home_controller");
const router = express.Router();
const multer = require("multer");
const fileController = require("../controller/file_controller");

const upload = multer({ dest: "uploads/files" });

router.get("/", home);
router.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.redirect("/");
  //   res.send("File uploaded successfully");
});

module.exports = router;
