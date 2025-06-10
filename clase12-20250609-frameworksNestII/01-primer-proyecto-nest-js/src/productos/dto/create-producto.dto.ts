import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateProductoDto {

    @IsString()
    code: string
    
    @IsString()
    title: string 
    
    @IsInt()
    @IsOptional()
    stock?: number 
    
    @IsNumber()
    price: number 
    
    @IsString()
    descrip: string
    
    @IsBoolean()
    status: boolean 
}


let pr0002:CreateProductoDto

pr0002={
    title:"Remera", 
    code:"A001", 
    descrip:"Remera", 
    status:false, 
    price:100,
    // color: "green"
}