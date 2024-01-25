/* Exercise 1 
Crea variables para guardar los siguientes datos de una persona:Nombre, Apellidos, Edad, Ciudad */
let name    = 'Juan'
let lastname= 'Arismendy'
let age     = 20
let city    = 'Medellin'

/* Exercise 2 
Crear un array con 3 valores numericos y sumar todos esos valores accedendolos mediante las posiciones. */
let numeros = [ 12, 45, 10 ]
let suma = numeros[0] + numeros[1] + numeros[2]
console.log(suma); 

console.log('// // // // //');


/* Exercise 3 
Crear un objeto de nombre user son las propiedades nombre, apellidos y edad, despues de crear el objeto crear una nueva variable llamada nombreCompleto de tipo string y guardar en esta variable el nombre y el apellido concatenados. */
let user = {
    name: 'Juan',
    lastname: 'Arismendy',
    age: 20
}
let fullname = user.name + ' ' + user.lastname
console.log('user fullname is: '+ fullname) ;

/* Exercise 4
1.Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener las propiedades nombre, email y edad, con valores asignados por ti.
2. Crear un arreglo de nombre correos y guardar todos los correos que existan en el arreglo del primer paso(debes de acceder a los correos apoyandote en lo aprendido anteriormente). */
let users = [
    {  name: 'Juan',    lastname: 'Arismendy',  age: 20, email : 'example1@gmail.com' } ,
    {  name: 'Manuela', lastname: 'Tejada',     age: 18, email : 'example2@gmail.com' } ,
    {  name: 'Pablo',   lastname: 'Rojas',      age: 29, email : 'example67@gmail.com' } ,  
    {  name: 'Paola',   lastname: 'Saenz',      age: 67, email : 'example21@gmail.com'} ,
    {  name: 'Jose',    lastname: 'Antonio',    age: 10, email : 'example5@gmail.com'} 
]
correos = []
users.forEach(userEmail => {
    correos.push(userEmail.email)
});
console.log('// // // // //');
console.log(correos);
