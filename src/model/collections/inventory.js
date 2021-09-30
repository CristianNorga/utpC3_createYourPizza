import { callApi } from "../callApi";

const inventory = {
  list(BASE_URL) {
    let endpoint = "productos";
    let url = BASE_URL + endpoint;
    return callApi(url);
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
