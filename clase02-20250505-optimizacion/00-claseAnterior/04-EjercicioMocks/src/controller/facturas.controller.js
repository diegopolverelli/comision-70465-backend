import { FacturasDAO } from "../dao/FacturasDAO.js";
import { modeloDatos } from "../models/datos.model.js";
import { generaFactura } from "../utils/mocks.js";

export const getFacturas=async(req, res)=>{
    try {
        let facturas=await FacturasDAO.get()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({facturas});
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                // detalle:`${error.message}`
            }
        )
    }
}

export const mockFacturas=async(req, res)=>{
    let {cantidad, grabaDB}=req.query

    if(!cantidad) cantidad=1

    let facturas=[]

    for(let i=0; i<cantidad; i++){
        facturas.push(generaFactura())
    }

    if(grabaDB){
        facturas=await modeloDatos.insertMany(facturas)
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({facturas});
}