import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { getRole } from "../api/api";

const UserCont = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0px;
`;

const UserTextCont = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 7px;
`;

export const NavBar = (props) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "fixed",
          zIndex: "100",
          boxShadow: "none",
        }}
      >
        <Typography
          variant="h4"
          color="inherit"
          component="div"
          sx={{
            border: "1px solid #9e9e9e",
            maxHeight: "56px",
            width: "100%",
            backgroundColor: "#fff",
            color: "black",
            textAlign: "center",
          }}
        >
          User Profile
        </Typography>
      </AppBar>
    </Box>
  );
};
