import { ToastEntity } from "../types";
import {
  buildToastEntityForMeta,
  buildToastEntityForProps,
  dispatchToast,
} from "./toastEntityBuilder";

import { upsertToast } from "./store";

function toaster(options: Partial<ToastEntity>) {
  // create toast entity
  let props = buildToastEntityForProps(options);
  const propsWithMeta = buildToastEntityForMeta(props);
  upsertToast(dispatchToast(propsWithMeta as ToastEntity));
}

export { toaster };
