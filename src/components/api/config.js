import axios from "axios";
import { store } from "../../redux";
import { closeLoaderAction, openLoaderAction } from "../../redux/actions";

const appApi = axios.create({
  baseURL: "http://design-tool-804828304.ap-south-1.elb.amazonaws.com",
});

appApi.interceptors.request.use((request) => {
  store.dispatch(openLoaderAction());
  return request;
});

appApi.interceptors.response.use(
  (response) => {
    store.dispatch(closeLoaderAction());
    return response;
  },
  (error) => {
    store.dispatch(closeLoaderAction());
    return Promise.reject(error);
  }
);

export default appApi;
