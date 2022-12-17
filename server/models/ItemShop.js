import mongoose from "mongoose";

const ItemShopShema = new mongoose.Schema({
  
  title: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    il: { type: String, required: true },
  },
  image:{image: { type: String, required: true }},
  sale: { type: Number, default: 0 },
  text: {
    en: { type: String, required: true },
    ru: { type: String, required: true },
    il: { type: String, required: true },
  },
  price: { type: Number, default: 0 },
});

export default mongoose.model("ItemShop", ItemShopShema);
