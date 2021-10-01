import { callApi } from "../callApi";

const inventory = {
  async listAll(BASE_URL) {
    // get
    let endpoint = "ingredients";
    let url = BASE_URL + endpoint;
    let response = await callApi(url);
    // manage
    let ingredients = {
      sizes: {},
      sauces: {},
      condiments: {},
    };
    ingredients.sizes = Object.assign(response.data.sizes);
    ingredients.sauces = Object.assign(response.data.sauces);
    ingredients.condiments = Object.assign(response.data.condiments);

    return ingredients;
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
