import bcrypt from "bcrypt"
// export const errores=(error, res)=>{
//     console.log(error);
//     res.setHeader('Content-Type','application/json');
//     return res.status(500).json(
//         {
//             error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
//             detalle:`${error.message}`
//         }
//     )
// }

export const generaHash=pass=>bcrypt.hashSync(pass, 10)
export const validaPass=(pass, hash)=>bcrypt.compareSync(pass, hash)

export const errorHandler=(error, req, res, next)=>{
    console.log(error);
    res.setHeader('Content-Type','application/json');
    return res.status(500).json(
        {
            error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            detalle:`${error.message}`
        }
    )
}