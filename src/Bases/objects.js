//Objetos

const person= {
    name : 'Tony',
    lastName : 'Stark',
    age : 45,
    address:{
        city:'El Paso',
        zip: 79925
    }

};

//console.log({person}); if you want to see the name of the variable you can put the object
// in Cbrackets
console.log(person);
//const person2 = person; this just references to the object not copied
const person2 ={...person}; //this make a copy of the object
person2.name = 'Juan';
console.log(person2);
console.log(person);

