import { ToasterOptions } from "../../types/core";
import buildToast from "./buildToast";

const toaster = (toastOptions: ToasterOptions) => {
  // if toast doesn't exist
  let toastProps = buildToast(toastOptions);
  // else find a toast to hot load

  // fire load event
};

export { toaster };
