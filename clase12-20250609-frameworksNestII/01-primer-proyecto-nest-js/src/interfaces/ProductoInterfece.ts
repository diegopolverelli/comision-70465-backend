export interface ProductoInterface{
    id: number 
    code: string
    title: string 
    stock?: number 
    price: number 
    descrip: string
    status: boolean 
}

let producto01:ProductoInterface


producto01={
    id:1, 
    title:"Remera", 
    code:"A001", 
    descrip:"Remera", 
    status:false, 
    price:100,
    // color: "green"
}

type Alumno={
    name: string
    legajo: number
}

let alumno01:Alumno

alumno01={
    name: "Juan", legajo:100
}