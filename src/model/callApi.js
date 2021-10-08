// import simulateNetworkLatency from "./simulateNetworkLatency";
const axios = require("axios");

export const callApi = {
  async create(url, data) {
    // await simulateNetworkLatency();
    let response = await axios.post(url, data);
    return response.data;
  },
  async get(url) {
    // await simulateNetworkLatency();
    let response = await axios.get(url);
    return response.data;
  },
  async update(url, data) {
    // await simulateNetworkLatency();
    let response = await axios.put(url, data);
    return response.data;
  },
  async remove(url) {
    // await simulateNetworkLatency();
    let response = await axios.delete(url);
    return response.data;
  },
};
