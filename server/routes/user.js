import { Router } from "express";
import { putUserCart } from "../controllers/cart.js";
import { getUserById } from "../controllers/getUserById.js";
import { putUserForm } from './../controllers/form.js';

const router = new Router();
//Put Form User 
//http://localhost:3002/api/form
router.post("/form", putUserForm);

//Put Form Cart 
//http://localhost:3002/api/cart
router.post("/cart", putUserCart);

//Get User All
//http://localhost:3002/api/get
router.get("/get", getUserById);

export default router;
