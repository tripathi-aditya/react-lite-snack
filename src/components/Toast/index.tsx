import { useEffect } from "react";
import { ToastProps } from "../../types";
import "./toast.css";
import { variantToClass } from "../../utils";

export const Toast = ({ variant, message, onLoadCB }: ToastProps) => {
  useEffect(() => {
    onLoadCB && onLoadCB();
  }, []);

  return (
    <div className={`toast toast_variant__${variant}`}>
      <section className="toast_icon">{/* icon */}</section>
      <span className="toast_message">{message}</span>
      <span className="toast_close">{/* close icon */}</span>
    </div>
  );
};
