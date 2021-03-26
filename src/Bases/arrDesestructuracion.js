//desestructuracion de arrays
const personajes = ['Goku','Vegeta','Trunks'];
const [ , ,p3] = personajes;

console.log(p3)

const retornaArreglo = ()=>{
    return ['ABCD', 1234];
};
const [letras, numeros] = retornaArreglo();
console.log(letras,numeros);

//Homework
const userState = (valor) => {
    return [valor, ()=>{console.log('Hello World')}];

}
const [nombre, setNombre]= userState('Goku');
console.log(nombre);
setNombre();
