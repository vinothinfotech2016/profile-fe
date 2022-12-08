import { Edit } from "@mui/icons-material";
import { clickPaths } from "../navigation/routePaths";

export const userList = (onEdit, data) => [
  {
    Header: "User Name",
    accessor: "name",
    // sticky: "left",
    id: 1,
    width: 200,
    Cell: (props) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {props.value}
      </div>
    ),
  },
  {
    Header: "User Email",
    accessor: "email",
    id: 2,
    width: 200,
  },
  {
    Header: "User Number",
    accessor: "mobileNumber",
    id: 3,
    width: 200,
  },
  {
    Header: "Edit",
    accessor: "",
    id: 4,
    width: 100,
    Cell: ({ row: { index } }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "blue",
        }}
        onClick={() => onEdit(index)}
      >
        Edit
      </div>
    ),
  },
];
