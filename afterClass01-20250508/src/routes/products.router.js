import { Router } from 'express';
import { addProduct, getProductos } from '../controller/Products.controller.js';
import passport from 'passport';
export const router=Router()

router.get('/', passport.authenticate("current", {session:false}), getProductos)
router.post("/", passport.authenticate("current", {session:false}), addProduct)