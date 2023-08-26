

const shop ={
    owner: "rasel sharif",
    address: {
        street: "3/4",
        area: "badda",
        city: "dhaka",
    },
    products: ['computer', 'motherboard', 'mouse', 'laptop'],
}

console.log(shop);

const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopToJsOb = JSON.parse(shopJSON);
console.log(shopToJsOb);