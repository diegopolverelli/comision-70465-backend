export class CustomError{
    static createError(name, cause, message, code=400){
        const error=new Error(message, {cause})
        // throw new Error("Fallo en la operación")
        error.custom=true
        error.name=name
        error.code=code

        throw error
    }

    // prueba(){
    //     console.log("prueba")
    // }
}

// CustomError.createError()
// let objetoCustomError=new CustomError()
// objetoCustomError.prueba()