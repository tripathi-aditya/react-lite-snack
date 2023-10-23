import { VARIANTS } from "./constants";

type ToastProps = {
  variant: VARIANTS;
  message: string;
  onLoadCB?: Function;
};

export { ToastProps };
