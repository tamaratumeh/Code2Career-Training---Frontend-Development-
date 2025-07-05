// #T1
const user = {
    name: 'tamara',
    age: 21,
    email: "tamaratumeh@gmail.com",
    password: "1020304050",
    isAdmin: false,
    extra1: "remove this",
    extra2: "remove this too"
};
////////////////////////////////////////////
// 1-
console.log('before delete:\n');
for (let key in user) {
    console.log(key + ': ' + user[key]);
}
delete user.password;
delete user.extra1;
delete user.extra2;
console.log('after delete:\n', user)
// 2-
console.log('checking if email exists in user:');
if ('email' in user) {
    console.log('true');
}
// 3-
console.log('Displaying all top level properties in user:');
for (let key in user) {
    console.log(key + " : " + user[key]);
}
// 4-
console.log('copying properties from user to admin:');
const admin = {};
for (let key in user) {
    if (user.hasOwnProperty(key)) {
        admin[key] = user[key];
        console.log(key + " : " + admin[key]);
    }
}
// 5-
//change the name and email:
admin.name = "Noor";
admin.email = "Noor@gmail.com";
// 6-
console.log('Log both user and the admin');
console.log(user);
console.log(admin);
////////////////////////////////////////////
// #T2
const user2 = {
    name: "Layla",
    role: "editor",
    permissions: {
        read: true,
        write: true,
        delete: false
    }
};
// 1-
for (let key in user2['permissions']) {
    if (user2['permissions'][key]) {
        if (key == 'read') {
            console.log('Layla can READ');
        } else if (key == 'write') {
            console.log('Layla can WRITE');
        }
    } else if (key == 'delete') {
        console.log('Layla cannot DELETE');
    }
}
// 2-
user2.lastLogin = "2025-07-05";
// 3-
if (!user2.hasOwnProperty('password') || user2.password == "" || user2.password === null) {
    user2['password'] = "default";
}
// 4-
delete user2.role;
// 5-
console.log(user2);
////////////////////////////////////////////
// #T3
// 1-
const animal = {
    species: "dog",
    canEat: true
};
// 2-
const pet = Object.create(animal);
// 3-
pet.name = "Rocky";
// 4-
console.log(pet.name);
console.log(pet.species);
console.log(pet.canEat);
// 5-
pet.species = "puppy";
// 6-
console.log(pet.species);
// output:puppy
// When we assign a new property to the pet object and give it a value pet.species = "puppy",
// JavaScript no longer depends on inheritance from animal.
// This is because pet now has its own species property, so it uses that directly. 
// 7-
delete pet.species;
console.log(pet.species);
// we removed the species property from the pet object.
// when we access pet.species, JavaScript doesn’t find it directly inside pet.
// it looks up the prototype chain and checks the object that pet is linked to which is animal.
// Since animal has a species property set to "dog", JavaScript returns that value.
// 8-
delete animal.species;
console.log(pet.species);
// deleted the species property from the animal object itself.
// When we access pet.species.
// Doesn’t find species inside pet
// Doesn’t find species inside animal
// 9-
console.log(Object.getPrototypeOf(pet));
