import { modeloDatos } from "../models/datos.model.js";

export class FacturasDAO{
    static async get(){
        return await modeloDatos.find().lean()
    }
    
}