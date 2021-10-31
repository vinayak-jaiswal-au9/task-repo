const express = require("express");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedTokenData;
    if (token) {
      decodedTokenData = jwt.verify(token, "123456");
      req.userId = decodedTokenData?.id;
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
