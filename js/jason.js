const user = {id: 1, name: 'abc', job:'developer'};
// console.log(user);

// JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);

const shop = {
    owner: 'Imon',
    address: {
        street: 'dhonia boro moshjid er pashe',
        city: 'dhaka',
        country: 'BD',
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);