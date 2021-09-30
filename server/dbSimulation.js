const { Producto } = require("./producto");

let db = {};
db = {
  uid1: new Producto(
    "uid1",
    "Aceite",
    "TodoCasa",
    1600,
    2200,
    new Date(2021, 12, 28)
  ),
  uid2: new Producto(
    "uid2",
    "Torta Chocolate",
    "Bimbo",
    8400,
    9900,
    new Date(2021, 9, 31)
  ),
  uid3: new Producto(
    "uid3",
    "Mayonesa",
    "Naturalia",
    2500,
    3100,
    new Date(2022, 8, 24)
  ),
};

function listIngredients() {
  let lista = [];
  for (let key in db) {
    lista.push(db[key]);
  }
  if (lista.length == 0) {
    return -1;
  }
  return lista;
}

module.exports = {
  listIngredients,
};
