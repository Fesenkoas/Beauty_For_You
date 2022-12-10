import Cart from "../models/Cart.js";
import Services from "../models/Services.js";
import User from "../models/User.js";

export const getUserById = async (req, res) => {
  try {
    const {phone} = req.body;
    const isUser = await User.findOne({ phone });
    if (!isUser) {
      return res.json({
        message: "User its  not find",
      });
    }
    const user = await User.findById(isUser._id);
    const listCart = await Promise.all(
        user.carts.map((cart)=>{
            return Cart.findById(cart._id);
        })
    )
    const listService = await Promise.all(
        user.services.map((service)=>{
            return Services.findById(service._id);
        })
    )
    const {username, email} = isUser;
    res.json({username, phone, email, listCart, listService})
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Error in form",
    });
  }
};

