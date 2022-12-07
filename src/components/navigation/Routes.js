import { Usertable } from "../pages/Usertable";
import { UserForm } from "../pages/UserForm";
import { mapPaths } from "./routePaths";

export const routes = [
  {
    path: mapPaths.MYUSER,
    component: Usertable,
    exact: true,
  },
  {
    path: mapPaths.MYUSERFORM,
    component: UserForm,
    exact: true,
  },
];
