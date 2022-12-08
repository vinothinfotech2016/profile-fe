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
      type: "string",
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
  profileUrl: {
    xs: 12,
    "ui:widget": "FileWidget",
    uploadFile: true,
  },
  name: { xs: 12 },
  email: { xs: 12 },
  mobileNumber: { xs: 12 },
});
