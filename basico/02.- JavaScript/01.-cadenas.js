// /* trabajando con cadenas de texto */

let cadena = 'David 29 años originario de : Estado Mexico';
let cadena_nueva = new String('Una cadena');
let cadena_supernueva = String('Hola Mundo');

let edad = '29';
let nacimiento = '1991';

//length obtiene la longitud de la cadena.
console.log(cadena.length);
console.log(edad.length);

//concat concatena una cadena con otra.
//El alumno : nombre apellido edad fue registrado correctamente
let nombre = 'David';
let apellido = 'Betanzos';
let age = 29
let boolean = true;

let mensaje = `El alumno : ${nombre} con apellido :       ${apellido} tiene la edad de : ${age}`
console.log(mensaje);

//metodo trim() elimina los espacios en blanco de una cadena de texto
let cadena = '   Hola mundo       js  ';
console.log(cadena.length);
console.log(cadena.trim().length);

// let espaciosInicio = '  Hola';
let espaciosFinal = 'hola   ';
let espaciosIn = espaciosInicio.trimStart();
let espaciosFn = espaciosFinal.trimEnd();
console.log(espaciosFn);
console.log(espaciosIn);

//replace remplaza un fragmento de una cadena entanto este exista.
let remplazar = 'esta es una cadena de texto';
const nuevaCadena = remplazar.replace('t','caracteres');
console.log(remplazar);
console.log(nuevaCadena);


//slice() recorta una cadena
const cadena = 'Esta es una cadena de texto';
console.log(cadena.slice(0,4));
console.log(cadena.substr(0,4));
console.log(cadena.slice(1,0));
console.log(cadena.substr(1,0));

//repeat 
const cadena = 'Esta es una cadena de texto';
console.log(cadena.repeat(3));

//split 
const cadena = 'Esta es una cadena de texto';
console.log(cadena.split(' '));

const nombre = 'David';
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());


const cad = 'Uno, dos,. tres, cuatro';
console.log(cad.includes('dos'));

const elemento1='No hay';
const elemento2 = '“ hilos atándome”';
const elemento3 = ' (Ultron)';

const primera; //No hay hilos atándome” (Ultron), imprimir la longitud

const segunda = '“Ese es mi secreto, siempre estoy molesto” (Bruce Banner)'; //molesto - enojado
const tercera = '“Yo soy el Hombre de Hierro” (Tony Stark)'; //yo soy iron man //crar un arreglo con los elementos de la cadena original.
const cuarta = '“Damas, niños, ovejas… algunos me dicen terrorista. ...' //comprobar que las siguientes palabras existan (ovejas ) (damas) (terrorista)





