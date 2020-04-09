import _ from "lodash";
const url = "https://corona-stinks-backend.herokuapp.com";

const checkStatus = async (res) => {
  if (!res.ok) {
    const jsonError = await res.json();
    throw jsonError;
  }
  return res;
};

const parseJSON = (res) => res.json();

export const makeRequest = async (method, path, body = {}) => {
  const getFetchOptions = (method, body) => {
    const base = {
      method,
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (_.isEmpty(body)) return base;
    return { ...base, body: JSON.stringify(body) };
  };

  return fetch(url + path, getFetchOptions(method, body))
    .then(checkStatus)
    .then(parseJSON)
    .catch((e) => {
      console.log(e);
    });
};

export default makeRequest;
