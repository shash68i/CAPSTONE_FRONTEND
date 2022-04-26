import { ActionTypes } from "@mui/base";
import { useField } from "formik";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";

const creatableCustomStyles = {
  container: (provided, state) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: "100%",
    fontSize: "1.5rem",
    border: "none",
  }),
  control: (provided, state) => ({
    ...provided,
    border: "none",
    borderBottom: "1px solid hsl(0, 0%, 80%)",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "black",
    fontSize: "1.5rem",
  }),

  singleValue: (provided, state) => ({
    ...provided,
  }),

  input: (provided, state) => ({
    ...provided,
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    paddingTop: 7,
    paddingBottom: 7,
  }),
};

export default function FormikSelect(props) {
  const [options, setOptions] = useState([]);

  const [field, meta, helpers] = useField(props.field.name); // can pass 'props' into useField also, if 'props' contains a name attribute
  const { setValue, setTouched, setError } = helpers;

  const setFieldProps = (selectedOption, ActionTypes) => {
    setOptions([...options, ActionTypes.option]);
    setValue([...props.field.value, ActionTypes.option.value]);
    setTouched(true);
    setError(undefined);
  };
  return props.selectStyle === "Normal Select" ? (
    <Select
      styles={creatableCustomStyles}
      isMulti={false}
      placeholder={props.placeholder}
      name={props.field.name}
      onBlur={props.field.onBlur}
      onChange={(selectedOption) => setValue(selectedOption.value)}
      options={options}
      {...props}
    />
  ) : (
    <CreatableSelect
      styles={creatableCustomStyles}
      isMulti
      placeholder={props.placeholder}
      name={props.field.name}
      onBlur={props.field.onBlur}
      onChange={(selectedOption, ActionTypes) =>
        setFieldProps(selectedOption, ActionTypes)
      }
      isClearable={false}
      options={options}
      {...props}
    />
  );
}
