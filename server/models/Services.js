import mongoose from "mongoose";

const ServicesShema = new mongoose.Schema({
  service: [{
    item: {
        type: String,
        default: "",
      },
    }],
  text: {
    type: String,
    default: "",
  },
});

export default mongoose.model("Services", ServicesShema);
