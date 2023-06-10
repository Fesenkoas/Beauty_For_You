import mongoose from "mongoose";

const ItemShopShema = new mongoose.Schema({
  image: { image: { type: String, required: true } },
  title: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    il: { type: String, required: true },
  },
  text: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    il: { type: String, required: true },
  },
  category: { type: String, required: true },
  price: { type: Number, default: 0 },
  sale: { type: Number, default: 0 },
});

export default mongoose.model("ItemShop", ItemShopShema);
