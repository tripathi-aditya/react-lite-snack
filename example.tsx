import React from "react";
import { toaster, ToastContainers, POSITIONS, VARIANTS } from "./src";

const Example = () => {
  const handleToast = () => {
    toaster({
      variant: VARIANTS.SUCCESS,
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded 1"),
      onCloseCB: () => console.log("Toast Clsoed 1"),
    });
    toaster({
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded 2"),
      onCloseCB: () => console.log("Toast Clsoed 2"),
    });
    toaster({
      variant: VARIANTS.INFO,
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded 3"),
      onCloseCB: () => console.log("Toast Clsoed 3"),
      position: POSITIONS.BOTTOM,
    });
    toaster({
      variant: VARIANTS.WARNING,
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded 4"),
      onCloseCB: () => console.log("Toast Clsoed 4"),
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
