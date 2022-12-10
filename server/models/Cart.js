import mongoose from "mongoose";

const CartShema = new mongoose.Schema(
  {
    items: [{
        item: {
          type: String,
          default: "",
        },
        price: {
          type: Number,
          default: 0,
        },
        amount: {
          type: Number,
          default: 0,
        },
        total: {
          type: Number,
          default: 0,
        },
      }],
    totalPrice: {
        type: Number,
        default: 0,
      },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", CartShema);
