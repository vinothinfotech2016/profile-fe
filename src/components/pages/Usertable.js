import React, { useEffect } from "react";
import { ListContainer } from "../styled";
import { CustomReactTable } from "../shared/CustomReactTable";
import { userList } from "../constants/User";
import { getRole, getUsers } from "../api/api";

export const Usertable = (props) => {
  const [roles, setRoles] = React.useState([]);
  const { tableData } = props;
  useEffect(() => {
    getRole()
      .then((res) => {
        setRoles(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ListContainer>
        <CustomReactTable
          columnData={userList(roles, tableData)}
          rawData={tableData}
          disableRowSelection={true}
          disablePagination={true}
          // onChangePageSize={onChangePageSize}
          // count={count}
          // pageSize={pageSize}
          // currentPage={currentPage}
          // onPageNumberChange={onPageNumberChange}
          columnSize={false}
          style={{
            th: {
              color: "#0000008A",
              font: "normal normal bold 17px Roboto !important",
              height: "64px !important",
              backgroundColor: "#D2E1FC",
            },
            body: {
              color: "#000000DE",
              font: "normal normal normal 14px Roboto !important",
            },
          }}
        />
      </ListContainer>
    </>
  );
};
