import React from "react";

const Toast = ({ message }: Props) => {
  return <h1>{message}</h1>;
};

type Props = {
  message: string;
};

export default Toast;
