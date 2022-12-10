import mongoose from "mongoose";

const ItemShopShema = new mongoose.Schema({
  imgUrl: { type: String, required: true },
  title: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    il: { type: String, required: true },
  },
  sale: { type: Number, default: 0 },
  text: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    il: { type: String, required: true },
  },
  price: { type: Number, default: 0 },
});

export default mongoose.model("ItemShop", ItemShopShema);
