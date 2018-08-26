//
// Object destructuring 
// 

// const person = {
//     name: 'Luis',
//     age: 22,
//     location: {
//         city: 'Las Vegas', 
//         temp: 101
//     }
// }; 

// const { name, age } = person; 

// console.log(`${person.name} is ${person.age}.`); 

// const { city, temp } = person.location; 

// const book = {
//     title: 'Ego is the enemy', 
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName); 



// 
// Array destructuring 
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']; 
const [ , city, state = 'New York'] = address; 

console.log(`You are in ${city} ${state}`); 

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];
const [name, , priceMedium] = item; 

console.log(`A medium ${name} costs ${priceMedium}`);