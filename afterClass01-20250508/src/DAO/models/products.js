import mongoose from "mongoose";

export const productosModelo=mongoose.model(
    "productos", 
    new mongoose.Schema(
        {
            title: String, 
            code: {
                type: String, unique: true
            }, 
            price: Number, 
            stock: Number
        },
        {
            timestamps: true, 
            // strict: true, 
            // collection: "productos2022",
        }
    )
)