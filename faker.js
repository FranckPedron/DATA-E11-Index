const { faker } = require('@faker-js/faker');
faker.locale = 'fr';

// const randomName = faker.name.findName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233

// console.log(randomName);
// console.log(randomEmail);
// console.log(randomPhoneNumber);

const users = [];
console.time("Ajout des utilisateurs");
for(let counter = 0; counter<1e6;counter++){
    users.push({
        name:faker.name.findName(), // je génère un nom aléatoire
        email:faker.internet.email(), // je génère un mail aléatoire
        phone:faker.phone.phoneNumber(), // je génère un numéro de téléphone aléatoire
        pet:faker.animal.type()
    });
}
console.timeEnd("Ajout des utilisateurs");


console.time("Nombre de users");
console.log(users.length);
console.timeEnd("Nombre de users");

console.time("Filtrage des propriétaires de chien");
console.log("Personnes qui ont un chien :", users.filter(user=>user.pet == "dog").length);
console.timeEnd("Filtrage des propriétaires de chien");

// ["toto","tutu"]
// {
//     0:"toto",
//     1:"tutu"
// }

// users=[
//     {/* un user */},
//     {/* un user */},
// ]
// {
//     0:{/* un user */},
//     1:{/* un user */}
// }

// on vient créer un nouvel objet - on prend donc de la place en mémoire
// usersPetIndex = {
//     "dog":[/* tableau des personnes ayant un chien */],
//     "cat":[/* tableau des personnes ayant un chat */],
//     ...
// }

// je déclare un objet qui va contenir tous mes utilisateurs classés par pet
const usersPetIndex = {};
for(const user of users){
    // est ce que le pet est défini dans l'index ?
    if(!usersPetIndex[user.pet]){
        // je crèe la clef
        usersPetIndex[user.pet] = [];
    }

    // j'ajoute mon utilisateur
    usersPetIndex[user.pet].push(user);
}

console.time("Comptage des propriétaires de chien");
console.log("Personnes qui ont un chien :", usersPetIndex["dog"].length);
console.timeEnd("Comptage des propriétaires de chien");