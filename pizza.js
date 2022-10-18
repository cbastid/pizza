let mipizza = {
    tipoPizza: "",
    tipoCorteza: "",
    proteina: [],
    quesos: [],
    salsas: [],
    monto: 0

}

function pizzaOven(tipopizza, tipoCorteza, proteina, quesos, salsas) {
    let pizza = mipizza;
    
    pizza.tipoPizza = tipopizza
    pizza.tipoCorteza = tipoCorteza
    pizza.proteina = proteina
    pizza.quesos = quesos
    pizza.salsas = salsas
    pizza.monto = 1000
    return pizza;
}
    
let pizzachicago = pizzaOven("estilo Chicago", "tradicional", ["pepperoni", "salchicha"],  ["mozzarella"],  ["salsa tomate"]);
console.log(pizzachicago);

let pizzalanzada = pizzaOven("lanzada a mano" , "marinara" , ["champiñones", "aceitunas", "cebollas"], ["mozzarella", "feta"], ["salsa tomate"]);
console.log(pizzalanzada);

let pizzaqueso = pizzaOven("estilo queso", "delgada", ["pavo", "salchicha"],  ["mozzarella"],  ["salsa tomate"]);
console.log(pizzaqueso);

let pizzaestacion = pizzaOven("cuatro estaciones" , "delgada" , ["champiñones", "aceitunas", "pollo"], ["mozzarella", "gauda"], ["salsa tomate"]);
console.log(pizzaestacion);


function randomPizza(){

    let tiposPizza = [pizzachicago, pizzalanzada, pizzaestacion, pizzaqueso]
    let idSel = Math.floor(Math.random() * 3);
    let miPizza;
    miPizza = tiposPizza[idSel]
    return miPizza;
}

console.log('Pizza Random:');
console.log(randomPizza());
