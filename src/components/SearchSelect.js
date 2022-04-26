import { ActionTypes } from "@mui/base";
import { useField } from "formik";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { getPostsByLocation } from "../slices/postSlice";

const creatableCustomStyles = {
  control: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    height: "36px",
    width: "32rem",
    fontSize: "1.5rem",
    backgroundColor: "#efefef",
    border: "none",
    outline: "none",
    padding: "0 5px",
    borderRadius: "0.8rem",
  }),
  menu: (provided, state) => ({
    ...provided,
    zIndex: "20"
  }),
  option: (provided, state) => ({
    ...provided,
    fontSize: "1.5rem",
    borderBottom: "1px solid rgb(239, 243, 244)"
  }),
  placeholder: (provided, state) => ({
      ...provided,
    fontFamily: `"Inter", cursive`,
    fontSize: "1.5rem",
    opacity: "0.5",
  }),
  input: (provided, state) => ({
    ...provided,
  }),
};

export default function SearchSelect(props) {
  const dispatch = useDispatch();

//   const [field, meta, helpers] = useField(props.field.name); // can pass 'props' into useField also, if 'props' contains a name attribute
//   const { setValue, setTouched, setError } = helpers;

//   const setFieldProps = (selectedOption, ActionTypes) => {
//     setOptions([...options, ActionTypes.option]);
//     setValue([...props.field.value, ActionTypes.option.value]);
//     setTouched(true);
//     setError(undefined);
//   };
  return (
    <Select
      styles={creatableCustomStyles}
      isMulti={false}
      placeholder={props.placeholder}
      onChange={(selectedOption) => dispatch(getPostsByLocation(selectedOption.value))}
      {...props}
    />
  );
}
