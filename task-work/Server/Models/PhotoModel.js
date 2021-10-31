const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  title: String,
  selectedImage: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  name: String,
  creator: String,
});

const PhotoInfo = mongoose.model("PhotoDetail", Schema);

module.exports = PhotoInfo;
