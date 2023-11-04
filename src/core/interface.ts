import { ToastEntity, ToastProps } from "../types";
import {
  buildToastEntityForMeta,
  buildToastEntityForProps,
} from "./toastEntityBuilder";

import { upsertToast } from "./store";

function toaster(options: ToastProps) {
  // create toast entity
  let props = buildToastEntityForProps(options);
  const propsWithMeta = buildToastEntityForMeta(props);
  upsertToast(propsWithMeta as ToastEntity);
}

export { toaster };
