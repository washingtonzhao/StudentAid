import { makeRequest } from "../utils/request";

export const createContributorRequest = (data) =>
  makeRequest("POST", "/contributors", data);
