let cart = JSON.parse(localStorage.getItem("cart")) || [];

function add(name, price){

let item = cart.find(i => i.name === name);

if(item){
item.qty++;
} else {
cart.push({name, price, qty:1});
}

localStorage.setItem("cart", JSON.stringify(cart));
}

function save(){
localStorage.setItem("cart", JSON.stringify(cart));
}
