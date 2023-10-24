import React from "react";
import { toaster, ToastContainer } from "./src";

const Example = () => {
  const handleToast = () =>
    toaster({
      variant: "success",
      message: "Hello World!",
      onLoadCB: () => console.log("Toast Loaded"),
    });

  return (
    <div>
      <button onClick={handleToast}>Toast Me Up !</button>
      <ToastContainer />
    </div>
  );
};

export default Example;
