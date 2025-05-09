import { productosModelo } from "./models/products.js";

export class ProductsDAO{
    static async get(){
        return await productosModelo.find().lean()
    }

    static async create(product){
        return await productosModelo.create(product)
    }
}