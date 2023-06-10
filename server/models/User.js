import mongoose from "mongoose";

const UserShema = new mongoose.Schema({
    username: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
    },
    carts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
      }],
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Services",
      }],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserShema);
