//desestructuracion
//asignacion desestructurante
const persona ={
    name:'Tony',
    age:45,
    clave:'Ironman'
};
const {age, name, clave} = persona;
// console.log(persona.name);
// console.log(persona.age);
// console.log(persona.clave);
console.log(name, age, clave);

const returnPerson=({clave,name, age, range = 'Cap'})=>{
    //console.log(name,age,range)
    return{
        nombreclave:clave,
        years:age,
        latlng:{
            lat:12.123,
            lng:-21.321
        }
    }
}
const { nombreclave, years, latlng:{lat,lng} }=returnPerson(persona);
console.log(nombreclave,years);
console.log(lat,lng)