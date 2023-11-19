import { memo, useEffect } from "react";
import { ToastProps } from "../../types";
import "./toast.css";

export const Toast = memo(
  ({ variant, message, onCloseCB, onCloseClick }: ToastProps) => {
    function handleClose() {
      onCloseCB && onCloseCB();
      onCloseClick && onCloseClick();
    }

    return (
      <div className={`toast toast_variant__${variant}`}>
        <section className="toast_content">
          <span className="toast_icon">{/* icon */}</span>
          <span className="toast_message">{message}</span>
        </section>
        <span className="toast_close" onClick={handleClose}>
          &#x2715;
        </span>
      </div>
    );
  }
);
