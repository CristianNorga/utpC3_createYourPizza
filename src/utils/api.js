const BASE_URL = "http://localhost:3001";

async function callApi(endpoint, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  ingredients: {
    list() {
      return callApi("/ingredients");
    },
    create(ingredient) {
      // throw new Error('500: Server error');
      return callApi(`/ingredients`, {
        method: "POST",
        body: JSON.stringify(ingredient),
      });
    },
    read(ingredientPath) {
      return callApi(`/ingredients/${ingredientPath}`);
    },
    update(ingredientPath, updates) {
      return callApi(`/ingredients/${ingredientPath}`, {
        method: "PUT",
        body: JSON.stringify(updates),
      });
    },
    remove(ingredientPath) {
      return callApi(`/ingredients/${ingredientPath}`, {
        method: "DELETE",
      });
    },
  },
};

export default api;
