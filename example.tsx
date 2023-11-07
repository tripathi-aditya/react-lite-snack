import React from "react";
import { toaster, ToastContainers, POSITIONS } from "./src";

const Example = () => {
  const handleToast = () => {
    toaster({
      variant: "success",
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded"),
      position: POSITIONS.TOP,
    });
    toaster({
      variant: "success",
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded"),
      position: POSITIONS.RIGHT,
    });
    toaster({
      variant: "success",
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded"),
      position: POSITIONS.BOTTOM,
    });
    toaster({
      variant: "success",
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded"),
      position: POSITIONS.LEFT,
    });
  };

  return (
    <div>
      <button onClick={handleToast}>Toast Me Up !</button>
      <ToastContainers />
    </div>
  );
};

export default Example;
