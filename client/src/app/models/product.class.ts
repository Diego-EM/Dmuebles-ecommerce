export class Producto{

    static infoProducto(obj: Producto){
        return new Producto(
        obj['id'],
        obj['producto'],
        obj['modelo'],
        obj['descripcion'],
        obj['precio'],
        obj['oferta'],
        obj['stock'],
        obj['proveedor'],
        obj['categoria'],
        obj['img']
        );
    }

    constructor(
        public id:          number,
        public producto:    string,
        public modelo:      string,
        public descripcion: string,
        public precio:      number,
        public oferta:      number,
        public stock:       number,
        public proveedor:   string,
        public categoria:   string,
        public img:         string
    ){}

    get precioOferta(): string{
        return (this.precio - (this.precio * this.oferta)).toFixed(2);
    }

    get imgProducto(): string{
        return `http://localhost/ecommerce/server/images/${this.id}.jpg`;
    } 
}