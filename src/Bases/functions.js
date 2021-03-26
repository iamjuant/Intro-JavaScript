//Functions
//You can create functions this way but it is not a good practice
// function salute(name){
//     return `hello, ${name}`
// }

const salute = function(name){
    return `hello, ${name}`;

}
console.log(salute('Goku'));


//lambda functions
const salute2 = (name)=>{
    return `hello, ${name}`;
}

const salute3 = (name)=>`hello, ${name}`;
const salute4 = ()=>`hello world`;

console.log(salute2('Vegeta'));
console.log(salute3(`Wiss`));
console.log(salute4());

//you can create functions like this
// const getUser = ()=>{
//     return {
//         uid:'ABCDE',
//         username:'iamjuant'
//     }
// }

const getUser = ()=>({
    uid:'ABCDE',
    username: 'iamjuant'
});
const user = getUser();
console.log(user);


//Homework
//Transform to array function
// return inplicit object
// proves

// function getActiveUser(name) {
//     return {
//         uid:'ABCDE',
//         username:name
//     }
// };

const getActiveUser = (theName)=>({
        uid:'ABCDE',
        username:theName
    });

const activeUser = getActiveUser('Juan');
console.log(activeUser);
