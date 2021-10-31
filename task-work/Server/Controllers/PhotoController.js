const PhotoModel = require("../Models/PhotoModel");
const mongoose = require("mongoose");
const getAllPhotos = async (req, res) => {
  try {
    const getPhotos = await PhotoModel.find();
    console.log("Hello");
    // console.log(getPhotos)
    res.status(200).json(getPhotos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPhoto = async (req, res) => {
  const formData = req.body;
  const newPhoto = new PhotoModel({
    ...formData,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePhotos = async (req, res) => {
  const { id: _id } = req.params;
  console.log(_id);
  const photo = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).send("Something is Wrong");
    }
    // PhotoModel.findOneAndUpdate()

    const updateInfo = await PhotoModel.findByIdAndUpdate(
      _id,
      { ...photo },
      {
        new: true,
      }
    );
    res.json(updateInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const onDeletePhoto = async (req, res) => {
  const { id: _id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).send("Something is Wrong");
    }
    await PhotoModel.findByIdAndRemove(_id);
    res.json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createPhoto = createPhoto;
exports.getAllPhotos = getAllPhotos;
exports.updatePhotos = updatePhotos;
exports.onDeletePhoto = onDeletePhoto;
