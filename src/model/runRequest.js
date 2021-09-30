let protocol = "http",
  location = "localhost",
  port = 3034;
let BASE_URL = `${protocol}://${location}:${port}/`;
let { dataInventory } = require("./collections/inventory"); //all

// (typeReq, collection, options = {})
const runRequest = {
  collection: {
    inventory() {
      let option = dataInventory.list(BASE_URL);
      return option;
    },
  },
};

export default runRequest;
