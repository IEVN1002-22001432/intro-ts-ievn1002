function sumar(a:number, b:number):number{
    return a+b;
}

const resultado = sumar(4, 3);
console.log(resultado);

function multiplicar(n1:number, n2?:number, base:number = 6):number{
    return n1 * base;
}

console.log(multiplicar(3))
console.log(multiplicar(3, 4))
console.log(multiplicar(3, 4, 2))

const addNumberRow = (a:number, b:number):string=>{return `${a+b}`}