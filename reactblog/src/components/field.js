import React from "react";
const Input = (props) => {
  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
export default Input;
