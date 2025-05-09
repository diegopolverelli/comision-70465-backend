import { Router } from 'express';
import passport from 'passport';
import jwt from "jsonwebtoken"
import { config } from '../config/config.js';
export const router=Router()

                        // paso 3
router.post('/register', passport.authenticate("registro", {session:false}), (req,res)=>{

    // si sale OK passport.authenticate deja en req una propiedad user    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({payload:`Registro exitoso`, nuevoUsuario: req.user})
})

router.post("/login", passport.authenticate("login", {session:false}), (req, res)=>{
    // si sale OK passport.authenticate deja en req una propiedad user 

    let token=jwt.sign(req.user, config.SECRET, {expiresIn: "1h"})

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login exitoso", usuarioLogueado: req.user, token});
})