const express = require("express");
const router = express.Router();

const PhotoController = require("../Controllers/PhotoController");

const authMiddleware = require("../Middleware/authmiddle");

router.get("/", PhotoController.getAllPhotos);
router.post("/", authMiddleware, PhotoController.createPhoto);
router.put("/:id", authMiddleware, PhotoController.updatePhotos);
router.delete("/:id", authMiddleware, PhotoController.onDeletePhoto);

module.exports = router;
