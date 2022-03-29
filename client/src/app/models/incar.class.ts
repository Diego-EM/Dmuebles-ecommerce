import { Producto } from "./product.class";

export class ProdInCar{
    constructor(
        public producto: Producto,
        public cantidad: number
    ){}

    get total(): number{
        return (this.producto.precioOferta) ? (parseFloat(this.producto.precioOferta) * this.cantidad) : (this.producto.precio * this.cantidad);
    }
}