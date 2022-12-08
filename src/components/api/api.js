import { apiRoutes } from "./apipath";
import appApi from "./config";

export const createUser = (data) => {
  return appApi.post(`${apiRoutes.CREATE_USER}`, data);
};

export const updateUser = (value, id) => {
  return appApi.post(`${apiRoutes.UPDATE_USER}/${id}`, value);
};

export const getUsers = (value, id) => {
  return appApi.get(`${apiRoutes.GET_USER}`);
};
