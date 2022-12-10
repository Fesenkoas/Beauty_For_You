import mongoose from "mongoose";

const ServiceShopShema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  title: { type: String, required: true },
  sale: { type: Number, default: 0 },
  text: {type: String, required: true},
  price: {type: Number, default: 0},
});

export default mongoose.model("ServiceShop", ServiceShopShema);
