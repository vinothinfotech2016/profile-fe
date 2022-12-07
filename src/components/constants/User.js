import { clickPaths } from "../navigation/routePaths";

export const userList = (roles, data) => [
  {
    Header: "User Name",
    accessor: "name",
    sticky: "left",
    id: 1,
    width: 300,
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
];
