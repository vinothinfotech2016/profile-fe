import { mapPaths } from "../navigation/routePaths";


export const menuMasterSidePopover = [
// { label:"Menu Parameters", route:`${mapPaths.MENUPARAMETERS}`},
{ label:"Side Navigation Menu", route:`${mapPaths.SIDENAVFLOW}`, key:"sideNavMenu" },
{ label:"Top Navigation Menu", route:`${mapPaths.TOPNAVFLOW}`, key:"topNavMenu" },
{ label:"Profile Menu", route:`${mapPaths.PROFILENAVFLOW}`, key:"profileNavMenu" }
]

export const menuFlowSidePopover = [
  { label:"Side Nav Screen Flow", route:`${mapPaths.SIDENAVSCREENTABLE}`, key:"sideNavScreen" },
  { label:"Top Nav Screen Flow", route:`${mapPaths.TOPNAVSCREENTABLE}`, key:"topNavScreen" },
  { label:"Profile Menu Screen Flow", route:`${mapPaths.PROFILENAVSCREENTABLE}`, key:"profileNavScreen" } 
]

export const initValue = {
  userDropdown: [
    { name: "My Profile", route: `${mapPaths.PROFILE}` },
    { name: "Customer", route: `${mapPaths.CUSTOMER}` },
    { name: "Roles & Access", route: `${mapPaths.ROLES}` },
    { name: "My User", route: `${mapPaths.MYUSER}` },
    // { name: "Parameters", route: `${mapPaths.PARAM}` },
    { name: "Logout", route: `${mapPaths.LOGIN}` },
  ],
  devDropDown: [
    { name: "My Profile", route: `${mapPaths.DEVELOPERPROFILE}` },
    { name: "Logout", route: `${mapPaths.LOGIN}` },
  ],
  stepper: [
    { name: "PRODUCT MASTER", route: `${mapPaths.PRODUCTMASTER}` },
    { name: "MENU MASTER", /*route: `${mapPaths.MENUMASTER}`*/  menuOption:menuMasterSidePopover},
    { name: "FORM MASTER", route: `${mapPaths.FORMMASTER}` },
    { name: "FORM FLOW", route: `${mapPaths.FORMFLOWTABLE}` },
    // { name: "SCREEN FLOW", route: `${mapPaths.SCREENFLOW}`}, 
    { name: "MENU FLOW", route: `${mapPaths.MENUFLOWTABLE}`},
    { name: "CUSTOMER COMMENTS", route: `${mapPaths.CUSTOMERCOMMENTSTABLE}`},
  ],
};

export const initValues = (role) =>{
 return role === "Developer" ? initValue.devDropDown : initValue.userDropdown
}

export const tableContent = {
  indiUser: {
    header: "INDIVIDUAL USER",
    tHead: ["User Name", "Mobile No", "Email ID", "Status"],
  },
  compUser: {
    header: "COMPANY USER",
    tHead: [
      "Company Name",
      "Contact",
      "Contact Email ID",
      "Contact Mobile",
      "Status",
    ],
  },
};

export const DESIGNTOOL = "DESIGN TOOL"


export const titleCase = (word) =>{
  const newString = word.split(' ')
     .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
     .join(' ');
     return newString
  }
  