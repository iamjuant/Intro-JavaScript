//promises
import {getHeroeId} from './Bases/imp-exp'
// const promesa = new Promise((resolve,reject) =>{
//     setTimeout(()=>{
//             const hero = getHeroeId(2);
//             console.log(hero);
//             resolve(hero)
//     }, 2000)
// });

// promesa.then((data1)=>{
//     console.log('Then de la promesa le pase el heroe ', data1['name'] );
//     //console.log(getHeroesByOwner('DC'));
// });

const getHeroByIdAsync = (id)=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
                const hero = getHeroeId(id);
                if(hero){
                    resolve(`El heroe es ${hero['name']}`);
                } else{
                    reject(`No se pudo encontrar el heroe con id ${id}`);
                }
        }, 2000)
    });
}

getHeroByIdAsync(10)
.then(console.log)
.catch(console.warn);