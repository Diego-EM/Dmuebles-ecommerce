import { Producto } from "./product.class";

export class ProdInCar{
    constructor(
        public producto: Producto,
        public cantidad: number
    ){}

    get total(): string{
        let total = (this.producto.precioOferta) ? (parseFloat(this.producto.precioOferta) * this.cantidad) : (this.producto.precio * this.cantidad);
        return total.toFixed(2);
    }
}