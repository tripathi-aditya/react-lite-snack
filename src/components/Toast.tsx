import React from "react";
import { ButtonProps } from "../types";

const Toast = ({ message }: ButtonProps) => {
  return <h1>{message}</h1>;
};

export default Toast;
