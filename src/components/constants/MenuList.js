import { IconButton } from "@mui/material";
import MenuPopover from "../shared/MenuPopover";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export const menuList = (inputValues, Menu,displayType) => [
  {
    Header: "Product Name",
    accessor: "productId",
    sticky: "left",
    id: 1,
    width: 300,
    Cell: (props) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {props?.value
            ? inputValues?.find((item) => item.id === props.value)?.name
            : "-"}
          <MenuPopover
            Menu={Menu}
            index={props.row.id}
            path={displayType?.formPath}
          />
        </div>
      );
    },
  },
  {
    Header: "Menu Name",
    accessor: "name",
    id: 2,
    width: 150,
  },
  {
    Header: "Order No",
    accessor: "orderNo",
    id: 3,
    width: 150,
  },
  {
    Header: "Sub Menus",
    accessor: "level_one_menu",
    id: 4,
    width: 150,
    Cell: (props) => {
      return props?.value?.length > 0 ? (props?.value?.map(menu =>{
        return menu.name
      })).toString() : "-"
    },
  },
  {
    Header: "Menu Status",
    accessor: "status",
    id: 5,
    width: 150,
  },
];
export const menuFlowLists = () => [
  {
    Header: "Menu",
    accessor: "menuName",
    sticky: "left",
    id: 1,
    width: 300,
    // Cell: (props) => (
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     }}
    //   >
    //     {props?.value?.length !== 0
    //       ? props?.value?.map((value) => {
    //           return value.name;
    //         })
    //       : "-"}
    //     <EditPopover
    //       values={props}
    //       rowId={props.row.original.id}
    //       toShow={{ edit: true, viewDetails: true }}
    //       paths={{
    //         edit: `${clickPaths.USENAVIGATECUSTOMERFORM}`,
    //       }}
    //     />
    //   </div>
    // ),
  },
  {
    Header: "Screen",
    accessor: "screenName",
    id: 2,
    width: 200,
  },
];



export const levelOneMenu = (onEdit , onDelete) => [
  {
    Header: "Sub Menu order No",
    accessor: "subMenuOrderNo",
    id: 1,
    width: 100,
  },
  {
    Header: "Level 1 submenu",
    accessor: "level1SubMenus",
    id: 2,
    width: 100,
  },
  {
    Header: "Level 2 submenu",
    accessor: "level2SubMenus",
    id: 3,
    width: 100,
    Cell:(props)=>{
      return props?.value?.toString()
    }
  },
  {
    Header: "",
    accessor: "",
    id: 4,
    width: 100,
    Cell:(props)=>{
      return <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:0
      }} >
        <div>
        <IconButton onClick={()=>onEdit(props.row.id)} >
      <EditIcon />
        </IconButton>
        <IconButton onClick={()=>onDelete(props.row.id)}  >
      <DeleteIcon />
        </IconButton>
        </div>
      </div>
    }
  },
];