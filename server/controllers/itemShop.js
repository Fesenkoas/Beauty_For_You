import ItemShop from "../models/ItemShop.js";

//Add item
export const addItem = async (req, res) => {
  try {
    const { imgUrl, title, sale, text, price } = req.body;
    const newProduct = new ItemShop({
      imgUrl,
      title,
      sale,
      text,
      price,
    });
    await newProduct.save();
    res.json({ newProduct, message: "product create" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: "Error in form" });
  }
};

//Update Item
export const updateItem = async (req, res) => {
  try {
    const {imgUrl, title, sale, text, price, id} = req.body;
    const item = await ItemShop.findById(id);
    if (!item) return res.json({ message: "empty" });

    item.imgUrl = imgUrl;
    item.title = title;
    item.sale = sale;
    item.text = text;
    item.price = price;

    await item.save();
    res.json(item);

  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Error in form",
    });
  }
};
//Delete Item
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.body;
    const item = await ItemShop.findByIdAndRemove(id);
    if (!item) return res.json({ message: "empty" });

    res.json({ message: "Item Delete" });
  } catch (error) {
    console.log(error.message);
    res.json({ message: "Error in form" });
  }
};
//Get All Items
export const getAllItem = async (req, res) => {
  try {
    const item = await ItemShop.find();

    res.json(item);
  } catch (error) {
    console.log(error.message);
    res.json({
      message: "Error in form",
    });
  }
};
