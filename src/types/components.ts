import { VARIANTS } from "./constants";

type ToastProps = {
  message: string;
  onCloseClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  variant?: VARIANTS;
};

export { ToastProps };
