export const tipado=`Tipos de datos`

let nombre:string="Mariana"

const getNombre=async()=>{
    return "Juan"
}

nombre=await getNombre()

console.log(nombre)

let edad:number=23

// edad=[1,2,3]

let domicilio:string|undefined|number

domicilio=9
domicilio="Calle z, 222"
domicilio==undefined

type stringUndefined=string|undefined

let dato01:stringUndefined

dato01="Datos varios..."

type TypePersona={
    nombre: string
    apellido? : string, 
    edad?: number
}

let juan:TypePersona

juan={
    nombre:"Juan",
    // colorDePelo:"Negro"
}

interface InterfaceAlumno{
    nombre:string
    apellido?: string
    promedio: number|undefined
    inscribirse:(materia:string)=>boolean
    rendir:(materia:string)=>number
} 

let alumno01:InterfaceAlumno

alumno01={
    nombre:"Matias", 
    promedio: undefined,
    // edad:24, 
    inscribirse: (materia:string)=>{
        // logica de inscripcion

        return true
    },
    rendir: (materia:string)=>9

}

console.log(alumno01.rendir("matemática"))

class Alumno implements InterfaceAlumno{
    nombre: string
    apellido?: string | undefined
    promedio: number | undefined
    edad:number=0
    domicilio: string

    constructor(nombre:string, apellido:string, promedio:number, domicilio: string){
        this.nombre=nombre
        this.apellido=apellido
        this.promedio=promedio
        this.domicilio=domicilio
    }

    inscribirse(materia: string){
        return true
    }

    rendir(materia: string){
        return 8
    }

}

let alumno02=new Alumno("Pedro", "Lopez", 7, "Calle zzz")

console.log(alumno02.inscribirse("Programación II"))
