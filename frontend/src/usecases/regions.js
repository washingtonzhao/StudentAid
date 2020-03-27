import { makeRequest } from "../utils/request";

export const getRegions = () => makeRequest("GET", "/regions");

export const getRegionResources = regionId =>
  makeRequest("GET", `/regions/${regionId}/resources`);
