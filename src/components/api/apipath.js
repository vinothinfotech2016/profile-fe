export const apiRoutes = {
  //myUser
  CREATE_CUSTOMER: "createCustomer",
  USER_LOGIN: "userLogin",
  GET_ROLES: "roles/list",
  GET_USER: "getCustomers",
  CREATE_ROLE: "roles/create",

  //PRODUCTMASTER
  PRODUCT_CREATION: "product/create",
  GET_PRODUCT_BY_ID: "product/getProductById",
  UPDATE_PRODUCT: "product/update",
  DELETE_PRODUCT:"product/delete",
  UPDATE_STATUS:"product/updateStatus",

  // MENU MASTER
  CREATE_MENU: "product/menu/create",
  GET_MENU_BY_USER_ID: "/product/menu/getMenusByUser",
  UPDATE_MENU: "product/menu/update",
  GET_MENU_BY_PRODUCT_ID: "/product/menu/getMenuByProductId",
  GET_MENUFLOW_BY_PRODUCT: "/menuFlow/getMenuFlowByProduct",

  // users
  USER_LISTING: "getAppUsers",
  CREATE_USER: "createAppUser",
  UPDATE_USER: "updateUser",

  //form master
  CREATE_SCREEN: "screen/create",
  // GET_SCREEN_BY_PRODUCT_ID: "screen/getScreensByUser",
  GET_SCREEN_BY_ID: "screen/getScreenById",
  UPDATE_SCREEN_FLOW: "screen/updateFlow",
  UPDATE_SCREEN:"screen/update",

  //developer flow
  GET_SCREEN_BY_MENU: "menuFlow/getScreenByMenu",
  CREATE_MENU_FLOW: "menuFlow/create",

  //screen flow
  GET_SCREEN_BY_PRODUCT_ID:"screen/getScreensByProduct",
  GET_SCREEN_BY_USER_ID:"screen/getScreensByUser",
  CREATE_SCREEN_FLOW:"screen/createScreenFlow",

  //menuflow 
  GET_MENU_BY_USER:"menuFlow/getMenuFlowByUser",
  UPDATE_MENU_FLOW:"menuFlow/updateById",

  //customer comments
  GET_CUSTOMER_COMMENTS:"screen/getScreenComments",
  CREATE_COMMENTS:"screen/commentsReply"
};
