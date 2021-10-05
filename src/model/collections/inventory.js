import { callApi } from "../callApi";

const inventory = {
  async listAll(BASE_URL) {
    let ingredientes = {
      sizes: {},
      sauces: {},
      condiments: {},
    };
    // get
    let endpoint = "ingredients";
    let url = BASE_URL + endpoint;
    let response = await callApi(url);
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
    // let ingredients = response;
    // ingredients.sizes = Object.assign(response.data.sizes);
    // ingredients.sauces = Object.assign(response.data.sauces);
    // ingredients.condiments = Object.assign(response.data.condiments);
    return ingredientes;
  },
  create() {
    // throw new Error('500: Server error');
    // return callApi(`/ingredients`, {
    //   method: "POST",
    //   body: JSON.stringify(ingredient),
    // });
  },
  read() {
    // return callApi(`/ingredients/${ingredientPath}`);
  },
  update() {
    // return callApi(`/ingredients/${ingredientPath}`, {
    //   method: "PUT",
    //   body: JSON.stringify(updates),
    // });
  },
  remove() {
    // return callApi(`/ingredients/${ingredientPath}`, {
    //   method: "DELETE",
    // });
  },
};

export { inventory as dataInventory };
