import { usuariosModelo } from "../models/users.model.js"

export const getUsers=async(req,res)=>{

    let usuarios=await usuariosModelo.findAll()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuarios})
}

export const createUser=async(req, res)=>{
    let {name, email}=req.body
    if(!name || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name | email son requeridos`})
    }

    // resto de validaciones...

    try {
        let nuevoUsuario=await usuariosModelo.create({name, email})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({message:"Usuario creado", nuevoUsuario});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error: ${error.message}`})
    }

}