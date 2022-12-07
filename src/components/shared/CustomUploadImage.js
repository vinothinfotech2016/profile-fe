import React, { useEffect, useRef } from "react";
import { FormControl, FormHelperText } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { snackBarAction } from "../../redux/actions";
import { snackBarMessages } from "../constants/SnackBarConstants";

// Basic user image
const User =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

const InputField = styled("input")(() => ({
  display: "none",
}));

const FileInputHolder = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  padding: 10,
  border: "1px dashed #c4c4c4",
  height: "35px !important",
  borderRadius: 5,
}));

const ImgTag = styled("img")(() => ({
  height: 40,
  width: 40,
  borderRadius: "50%",
  marginRight: 12,
}));

export function CustomUploadImage({
  name,
  label,
  error,
  url,
  touched,
  value,
  sytle,
  onChange,
  profileUrl,
  isViewMode,
  uploadFile,
  accept,
  formik,
}) {
  const [imgUrl, setImgUrl] = React.useState(url);
  const [fileName, setFileName] = React.useState(value && value[0]?.name);
  const myRefname = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    myRefname.current.click();
  };

  const onImageChange = (event) => {
    if (event.target.files[0].size > 1000000) {
      return dispatch(snackBarAction({
        message:snackBarMessages.VALID_FILE,
        open:"true",
        color:"error"
      }));
    }
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImgUrl(reader.result);
        // onChange(name, event.target.files[0]);
        // onChange([event.target.files[0]]);
        onChange(event);
        setFileName(event.target.files[0].name);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    if(typeof value[0] === "string"){
      setImgUrl(value[0])
      return
    }
  }, [value]);


  return (
    <FormControl fullWidth>
      <InputField
        ref={myRefname}
        name={name}
        type={"file"}
        error={touched && error}
        onChange={(event) => onImageChange(event)}
        label={label}
        disabled={isViewMode}
        accept={accept}
      />
      <FileInputHolder onClick={(e) => handleClick(e)}>
        {uploadFile ? (
          <FileUploadIcon style={{ marginRight: 10 }} />
        ) : (
          <ImgTag src={imgUrl || profileUrl || User} alt=""></ImgTag>
        )}
        <span
          style={{
            color: "#000000DE",
            font: "normal normal normal 16px/19px Lato",
          }}
        >
          {fileName || label}
        </span>
      </FileInputHolder>
      <FormHelperText error>
        {error || (formik?.touched?.[name] && formik?.errors?.[name])}
      </FormHelperText>
    </FormControl>
  );
}