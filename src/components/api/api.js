import { apiRoutes } from "./apipath";
import appApi from "./config";

export const createCustomer = (data) => {
  return appApi.post(`${apiRoutes.CREATE_CUSTOMER}`, data);
};
export const loginUser = (data) => {
  return appApi.post(`${apiRoutes.USER_LOGIN}`, data);
};

export const getRole = () => {
  return appApi.get(`${apiRoutes.GET_ROLES}`);
};

export const userList = () => {
  return appApi.get(`${apiRoutes.GET_USER}`);
};

export const createProduct = (data) => {
  return appApi.post(`${apiRoutes.PRODUCT_CREATION}`, data);
};

export const getProductById = (id) => {
  return appApi.get(`${apiRoutes.GET_PRODUCT_BY_ID}/${id}`);
};

export const updateProduct = (value, id) => {
  return appApi.post(`${apiRoutes.UPDATE_PRODUCT}/${id}`, value);
};

export const createMenu = (value) => {
  return appApi.post(`${apiRoutes.CREATE_MENU}`, value);
};

export const getMenusByUserId = (id) => {
  return appApi.get(`${apiRoutes.GET_MENU_BY_USER_ID}/${id}`);
};

export const updateMenu = (value) => {
  return appApi.put(`${apiRoutes.UPDATE_MENU}`, value);
};

export const getUsers = () => {
  return appApi.get(`${apiRoutes.USER_LISTING}`);
};

export const createUsers = (value) => {
  return appApi.post(`${apiRoutes.CREATE_USER}`, value);
};

export const createScreen = (value) => {
  return appApi.post(`${apiRoutes.CREATE_SCREEN}`, value);
};

// export const getScreensByProductId = (id) => {
//   return appApi.get(`${apiRoutes.GET_SCREEN_BY_PRODUCT_ID}/${id}`);
// };

export const getScreenById = (id) => {
  return appApi.get(`${apiRoutes.GET_SCREEN_BY_ID}/${id}`);
};

export const updateScreenFlow = (value, id) => {
  return appApi.put(`${apiRoutes.UPDATE_SCREEN_FLOW}/${id}`, value);
};

export const getMenusByProductId = (id) => {
  return appApi.get(`${apiRoutes.GET_MENU_BY_PRODUCT_ID}/${id}`);
};
export const getMenuFlowByProduct = (productId) => {
  return appApi.get(`${apiRoutes.GET_MENUFLOW_BY_PRODUCT}/${productId}`);
};
export const getScreenByMenu = (id) => {
  return appApi.get(`${apiRoutes.GET_SCREEN_BY_MENU}/${id}`);
};

export const createMenuFlow = (value) => {
  return appApi.post(`${apiRoutes.CREATE_MENU_FLOW}`, value);
};

export const updateUser = (id, value) => {
  return appApi.put(`${apiRoutes.UPDATE_USER}/${id}`, value);
};

export const deleteProduct = (id) => {
  return appApi.delete(`${apiRoutes.DELETE_PRODUCT}/${id}`)
}

export const updateStatus = (id , value) =>{
  return appApi.post(`${apiRoutes.UPDATE_STATUS}/${id}`,value)
}

export const updateScreen = (id , value) => {
  return appApi.put(`${apiRoutes.UPDATE_SCREEN}/${id}`,value)
}

export const getScreensByProductId = (id) =>{
  return appApi.get(`${apiRoutes.GET_SCREEN_BY_PRODUCT_ID}/${id}`)
}

export const getScreensByUser = (id) => {
  return appApi.get(`${apiRoutes.GET_SCREEN_BY_USER_ID}/${id}`)
}

export const createScreenFlow = (id,value) => {
  return appApi.post(`${apiRoutes.CREATE_SCREEN_FLOW}/${id}`,value)
}

export const getMenubyUser = (id) => {
  return appApi.get(`${apiRoutes.GET_MENU_BY_USER}/${id}`)
}

export const updateMenuFlow = (value,id) => {
  return appApi.put(`${apiRoutes.UPDATE_MENU_FLOW}/${id}`,value)
}

export const getCustomerCommentsByScreenId = (id) => {
  return appApi.get(`${apiRoutes.GET_CUSTOMER_COMMENTS}/${id}`)
}

export const createComments = (value) => {
  return appApi.post(`${apiRoutes.CREATE_COMMENTS}`,value)
}