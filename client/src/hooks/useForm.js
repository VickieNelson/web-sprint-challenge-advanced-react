// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValue) => {
  //useState
  const [values, setValues] = useState(initialValue);
  //handle change event
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return [values, handleChanges];
};
