//import { heroes } from './data/heroes'
import {heroes} from '../data/heroes'


//console.log(heroes);

export const getHeroeId = (id) => heroes.find( (heroe)=>{ return heroe.id===id}  );

//console.log(getHeroeId(3))

export const getHeroesByOwner = (owner)=> heroes.filter((heroe)=>heroe.owner===owner);

//console.log(getHeroesByOwner('DC'))