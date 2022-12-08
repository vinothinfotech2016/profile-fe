import Form from "@rjsf/core";
import { widgets } from "../../widgets/widgets";
import {
  Box,
  Button,
  Grid,
  responsiveFontSizes,
  Snackbar,
  Typography,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { customErrorMsg } from "../../template/customErrorMsg";
import { CustomFieldTemplate } from "../../template/fieldTemplate";
import { objectFieldTemplate } from "../../template/objectTemplate";
import React, { useEffect } from "react";
import { formNewUserSchema, formNewUserUiSchema } from "../schema/newuser";
import { clickPaths } from "../navigation/routePaths";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { snackBarAction } from "../../redux/actions";
import { snackBarMessages } from "../constants/SnackBarConstants";
import { ADD, CANCEL, UPDATE } from "../constants/ButtonConstants";
import { Usertable } from "./Usertable";
import Container from "@mui/material/Container";
import { NavBar } from "../shared/NavBar";
import { createUser, getUsers, updateUser } from "../api/api";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const UserForm = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState({});
  const [userLists, setUserLists] = React.useState([]);
  const [liveValidator, setLiveValidator] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [editId, setEditId] = React.useState(null);
  const dispatch = useDispatch();
  const location = useLocation();
  const editData = location.state;
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const mobileRegex = /^[0-9]{10}$/;

  useEffect(() => {
    if (editData) {
      const { name, email, mobileNumber } = editData;
      setUserData({
        name,
        email,
        mobileNumber: parseInt(mobileNumber),
      });
    }
  }, [editData]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const add = (values) => {
    setUserLists([...userLists, values.formData]);
    values.formData.mobileNumber = values.formData.mobileNumber.toString();
    createUser(values.formData)
      .then(() => {
        alert("user created");
        setUserData({});
      })
      .catch((err) => JSON.stringify(err));
  };

  const update = async (values) => {
    const { name, email, mobileNumber } = values.formData;
    await updateUser(values.formData, userData.id);
    setEditId(null);
    await fetchAllUsers();
  };
  const fetchAllUsers = async () => {
    const { data } = await getUsers();
    setUserLists(data);
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <>
      <NavBar />
      <Container maxWidth="lg" style={{ paddingTop: 100 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Form
              schema={formNewUserSchema(role, products, editData)}
              uiSchema={formNewUserUiSchema()}
              widgets={widgets}
              formData={userData}
              showErrorList={false}
              liveValidate={liveValidator}
              noHtml5Validate
              ObjectFieldTemplate={objectFieldTemplate}
              FieldTemplate={CustomFieldTemplate}
              transformErrors={(errors) =>
                customErrorMsg(errors, formNewUserSchema())
              }
              onChange={(e) => {
                setUserData({
                  ...e.formData,
                });
              }}
              onSubmit={(values) => {
                if (!values?.formData?.email.match(emailRegex)) {
                  alert("Please Enter Valid Email");
                  return;
                }
                if (
                  !values?.formData?.mobileNumber.toString().match(mobileRegex)
                ) {
                  alert("Please Enter Valid Mobile Number");
                  return;
                }
                editId ? update(values) : add(values);
              }}
            >
              <div className="btnContainer">
                <Button
                  variant="outlined"
                  className="btn"
                  onClick={() => setUserData({})}
                >
                  {CANCEL}
                </Button>
                <Button
                  type="submit"
                  variant="outlined"
                  className="btn"
                  onClick={() => setLiveValidator(true)}
                >
                  {editId ? UPDATE : ADD}
                </Button>
                <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={handleClose}
                >
                  <Alert severity="success" sx={{ width: "100%" }}>
                    User created Successfully
                  </Alert>
                </Snackbar>
              </div>
            </Form>
          </Grid>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                width: "100%",
                backgroundColor: "#fff",
                color: "black",
                textAlign: "center",
              }}
            >
              User Lists
            </Typography>
            <Usertable
              onEdit={(index) => {
                setEditId(userLists[index].id);
                setUserData(userLists[index]);
              }}
              tableData={userLists}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
