let protocol = "http",
  location = "localhost",
  port = 3000;
let BASE_URL = `${protocol}://${location}:${port}/`;
let { dataInventory } = require("./collections/inventory"); //all

// (typeReq, collection, options = {})
const runRequest = {
  collection: {
    inventory() {
      let option = dataInventory.listAll(BASE_URL);
      return option;
    },
  },
};

export default runRequest;
