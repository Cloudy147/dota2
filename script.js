let cart = JSON.parse(localStorage.getItem("cart")) || [];

function add(name, price){

let item = cart.find(i => i.name === name);

if(item){
item.qty += 1;
} else {
cart.push({name, price, qty:1});
}

localStorage.setItem("cart", JSON.stringify(cart));
}
