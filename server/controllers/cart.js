import Cart from "../models/Cart.js";
import User from "../models/User.js";

export const putUserCart = async (req, res) => {
  try {
    const { username, phone, email, items, totalPrice } = req.body;

    const isUser = await User.findOne({ phone });

    if (isUser) {
      const newCart = new Cart({
        items,
        totalPrice,
      });
      await newCart.save();
      await User.findByIdAndUpdate(isUser._id, {
        $push: { carts: newCart },
      });
      return res.json({
        message: "User its find",
      });
    }

    const newCart = new Cart({
      items,
      totalPrice,
    });
    await newCart.save();
    const newUser = new User({
      username,
      phone,
      email,
      carts: newCart,
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
