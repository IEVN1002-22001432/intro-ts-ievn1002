interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    email:string;
    nota?:number;
}

const alumno:Alumno = {
    nombre: "Mario",
    apellido: "Lopez",
    edad: 22,
    email: "mario@gmail.com",
}

console.table(alumno);

let mascotas=['Perro', 'Gato', 'Perico'];
mascotas[1] = 'Nuevo gato';
mascotas.push('Leon');

console.log(mascotas);