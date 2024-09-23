const products = [
  {name: 'gold star', price: 30},
  {name: 'green shell', price: 10},
  {name: 'red shell', price: 40},
  {name: 'banana skin', price: 5},
  {name: 'mushroom', price: 50}
];

// const filtered = products.filter(product => {
//   return product.price>20;
// })

// const promos = filtered.map(product => {
//   return `The ${product.name} is ${product.price / 2} ruppee`;
// })

const promos = products
  .filter(product => product.price > 20) 
  .map(product => `The ${product.name} is ${product.price / 2} rupee`); 

console.log(promos); 
