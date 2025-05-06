import { Router } from 'express';
import { getFacturas, mockFacturas } from '../controller/facturas.controller.js';
export const router=Router()

router.get('/', getFacturas)
router.get("/mock", mockFacturas)