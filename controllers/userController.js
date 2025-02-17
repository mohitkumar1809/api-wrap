const { ApiResponse } = require("../Response");
const userModel = require("../models/user");

exports.createUser = async (req, res) => {
  const apiResponse = new ApiResponse();
  try {
    const user = new userModel(req.body);
    const savedUser = await user.save();
    apiResponse.setStatus(201);
    apiResponse.setMessage("New User Created Successfully.");
    apiResponse.setResult(savedUser);
    res.status(200).send(apiResponse);
  } catch (err) {
    apiResponse.setStatus(500);
    apiResponse.setMessage("Internal Server Error");
    apiResponse.setResult(err);
    res.status(200).send(apiResponse);
  }
};
