import { callApi } from "../callApi";
import { BASE_URL } from "../apiConfig";
let endpoint = "check";

const check = {
  async create(data) {
    // throw new Error('500: Server error');
    let url = BASE_URL + endpoint;
    let response = await callApi.create(url, data);
    return response.data;
  },
  async read(_id) {
    let url = `${BASE_URL}${endpoint}?_id=${_id}`;
    let response = await callApi.get(url);
    return response.data;
  },
  update() {},
  remove() {},
};

export { check as dataCheck };
