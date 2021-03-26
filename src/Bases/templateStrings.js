//Template Strings

const myName = 'Juan';
const lastName = 'Trujillo';

//const fullName = myName + ' ' + lastName;
const fulllName = `${myName} ${lastName}`;
console.log(fulllName);

function getGreeting(name){
    return 'Hello ' +name;
}
console.log(`This is a template string ${getGreeting(myName) } `);