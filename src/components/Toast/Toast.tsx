import { memo } from "react";
import { ToastProps } from "../../types";
import "./toast.css";

const Toast = memo(({ variant, message, onCloseClick }: ToastProps) => {
  return (
    <div className={`toast toast_variant__${variant}`}>
      <section className="toast_content">
        <span className="toast_icon">{/* icon */}</span>
        <span className="toast_message">{message}</span>
      </section>
      <span className="toast_close" onClick={onCloseClick}>
        &#x2715;
      </span>
    </div>
  );
});

export default Toast;
