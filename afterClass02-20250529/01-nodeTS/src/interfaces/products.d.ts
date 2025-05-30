export type Products=Product[]

export interface Product{
    id: number;
    code: string;
    title: string;
    stock: number;
    price: number;
    descrip: string;
    status: boolean;
}