import { Router } from "express";
import { addItem, deleteItem, getAllItem, updateItem } from "../controllers/itemShop.js";



const router = new Router();
//Add Item Shop
//http://localhost:3002/item/add
router.post('/add', addItem);

//Delete Item Shop
//http://localhost:3002/item/delete
router.delete('/delete', deleteItem);

//Get All Item Shop
//http://localhost:3002/item/get
router.get('/get', getAllItem);

//Update Item Shop
//http://localhost:3002/item/update
router.put('/update', updateItem);



export default router;