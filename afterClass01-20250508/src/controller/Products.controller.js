import { ProductsDAO } from "../DAO/ProductsDAO.js"

export const getProductos=async(req, res, next)=>{
    try {
        // validaciones quedan para el alumno...
        let productos=await ProductsDAO.get()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({productos});
    } catch (error) {
        return next(error)
    }
}

export const addProduct=async(req, res, next)=>{
    try {
        let {title, price=0, code, stock=0}=req.body
        if(!title || !code){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Las propiedades title y code son requeridas`})
        }

        // validaciones x cuenta del alumno
        let nuevoProducto=await ProductsDAO.create({title, price, code, stock})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:`Producto creado con éxito`, nuevoProducto});
    } catch (error) {
        return next(error)
    }
}