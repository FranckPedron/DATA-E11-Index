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

/*
["toto","tutu"]
{
    0:"toto",
    1:"tutu"
}
*/

user=[
    {/* un user */},
    {/* un user */}
];

userPetIndex = {
    "dog":[/* tableau des personnes ayant un chien */],
    "cat":[/* tableau des personnes ayant un chat */],

}