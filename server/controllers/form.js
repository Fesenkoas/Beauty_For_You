import Services from "../models/Services.js";
import User from "../models/User.js";
//import bcrypt from "bcryptjs";

//Put User
export const putUserForm = async (req, res) => {
  try {
    const {username, phone, email, service, text } = req.body;
    const isUser = await User.findOne({ phone });

    if (isUser) {
      const newServices = new Services({
        service,
        text,
      });
      await newServices.save();
      await User.findByIdAndUpdate(isUser._id,{
        $push:{services: newServices}
      })
      return res.json({
        message: "User its find",
      });
    }
    const newServices = new Services({
        service,
        text,
      });
      await newServices.save();
    const newUser = new User({
      username,
      phone,
      email,
      services:newServices
    });
    await newUser.save();
    res.json({
      newUser,
      message: "Message Sand",
    });
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Error in form",
    });
  }
};

//Get User
export const getUserForm = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};
