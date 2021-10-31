const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/UserModel");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const getExisting = await userModel.findOne({ email });
    if (!getExisting) {
      return res.status(404).json({
        message: "User Does Not Exist",
      });
    }
    const hashedPassword = await bcrypt.compare(password, getExisting.password);
    if (!hashedPassword) {
      return res.status(404).json({
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign(
      {
        email: getExisting.email,
        id: getExisting._id,
      },
      "123456",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result: getExisting, token });
  } catch (error) {
    res.status(400).json({ message: "Something Crashed" });
  }
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const getExisting = await userModel.findOne({ email });
    if (getExisting) {
      return res.status(400).json({ message: " User Already Exists" });
    }
    const bcryptPassword = await bcrypt.hash(password, 12);
    const result = await userModel.create({
      email,
      password: bcryptPassword,
      name,
    });
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      "123456",
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(400).json({ message: "Something Crashed" });
  }
};

exports.loginUser = loginUser;
exports.registerUser = registerUser;
