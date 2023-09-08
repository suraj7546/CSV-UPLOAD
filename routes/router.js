const express = require("express");
const { home } = require("../controller/home_controller");
const router = express.Router();

router.get("/", home);
// router.get('/csv/:id', csvController.view);
// router.post('/upload', upload.single('csv') ,csvController.upload);

module.exports = router;
