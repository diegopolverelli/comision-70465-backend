import { IsInt, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateClienteDto {

    @IsString({
        message:`nombre es requerido, y de tipo string`
    })
    nombre: string

    @IsInt()
    cuit: number

    @IsNumber()
    @IsOptional()
    limiteCtaCte?: number
}
