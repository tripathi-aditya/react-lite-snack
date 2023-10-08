import React from "react";
import { toaster } from "./src/core/initializers";

const Example = () => {
  const handleToast = () =>
    toaster({
      variant: "success",
      message: "Hello World!",
      onLoadCallback: () => console.log("Toast Loaded"),
    });

  return (
    <div>
      <button onClick={handleToast}>Toast Me Up!</button>
    </div>
  );
};

export default Example;
