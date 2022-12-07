export const formNewUserSchema = (role, products, editData) => ({
  type: "object",
  required: ["name", "email", "mobileNumber"],
  properties: {
    name: {
      type: "string",
      label: "Name",
      name: "name",
    },
    email: {
      type: "string",
      label: "Email",
    },
    mobileNumber: {
      type: "number",
      label: "Mobile Number",
    },
    profileUrl: {
      type: "array",
      label: "Upload Logo",
      items: {
        // type:  (editData ? 'string' : "object") ,
      },
    },
  },
});

export const formNewUserUiSchema = (editId) => ({
  name: {},
  email: { xs: 6 },
  mobileNumber: { xs: 6 },
  profileUrl: {
    xs: 6,
    "ui:widget": "FileWidget",
    uploadFile: true,
    // editId: editId,
  },
});
