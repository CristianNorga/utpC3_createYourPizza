import { callApi } from "../callApi";
// const { dbconfig } = require("../apiconfig");
import { BASE_URL } from "../apiConfig";

const inventory = {
  async listAll() {
    // console.log("protocol: " + protocol);
    let ingredientes = {
      sizes: {},
      sauces: {},
      condiments: {},
    };
    let url = BASE_URL + "ingredients";
    let data = await callApi.get(url);
    let response = data.data;
    // manage
    for (let x in response.sizes) {
      ingredientes.sizes[response.sizes[x]._id] = response.sizes[x];
    }
    for (let x in response.sauces) {
      ingredientes.sauces[response.sauces[x]._id] = response.sauces[x];
    }
    for (let x in response.condiments) {
      ingredientes.condiments[response.condiments[x]._id] =
        response.condiments[x];
    }

    return ingredientes;
  },
};

export { inventory as dataInventory };
