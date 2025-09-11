import type { Producto } from './05-desestructuracion-funciones';
import { calcularISV2 } from './05-desestructuracion-funciones';

const carrito:Producto[]=[
    {desc:"Telefono1",
    precio:1000},
    {desc:"Telefono2",
    precio:2000},
    {desc:"Telefono3",
    precio:3000}
]

const [total, isv] = calcularISV2(carrito);
console.log("Total carrito: ", total);
console.log("ISV carrito: ", isv);