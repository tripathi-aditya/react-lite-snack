import { POSITIONS, VARIANTS } from "./constants";

type ToastProps = {
  message: string;
  onLoadCB?: Function;
  position: POSITIONS;
  variant?: VARIANTS;
};

export { ToastProps };
