import { dataInventory } from "./collections/inventory"; //all
import { dataCheck } from "./collections/check";

// (typeReq, collection, options = {})
const runRequest = {
  collection: {
    async inventory() {
      let option = await dataInventory.listAll();
      return option;
    },
    async check(type, data) {
      let option;
      switch (type) {
        case "create":
          option = await dataCheck.create(data);
          break;
        case "read":
          option = await dataCheck.read(data);
          break;
        default:
          break;
      }
      return option;
    },
  },
};

export default runRequest;
