import simulateNetworkLatency from "./simulateNetworkLatency";

export async function callApi(url, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  await simulateNetworkLatency();
  const request = await fetch(url, options);
  const response = await request.json();

  return response;
}
