import { Router } from 'express';
import { createUser, getUsers } from '../controller/usuarios.controller.js';
export const router=Router()

router.get('/', getUsers)
router.post("/", createUser)