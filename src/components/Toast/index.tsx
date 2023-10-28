import { useEffect } from "react";
import { ToastProps } from "../../types";

export const Toast = ({ variant, message, onLoadCB }: ToastProps) => {
  useEffect(() => {
    onLoadCB && onLoadCB();
  }, []);

  return <div>{message}</div>;
};
