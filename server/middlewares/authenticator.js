const jwt = require("jsonwebtoken");


const { UserModel } = require("../models/user.model");

require("dotenv").config();


const authenticate = async (req, res, next) => {
  try {
    const maintoken = req.headers.authorization;
    // const token = req.cookies.token;


    const decodedToken = jwt.verify(maintoken, process.env.NormalToken);
    const { userID } = decodedToken;
    req.body.userID=decodedToken.userID

    // Check if the user exists
    const user = await UserModel.findById(userID);
    const role=user?.role
       req.role=role

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

   

    next();
  
  } catch (error) {
    res.send({ msg: "Access Token is Expired" });
  }
};
module.exports = { authenticate };
