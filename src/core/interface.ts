import { ToastEntity } from "../types";
import {
  buildToastEntityForMeta,
  buildToastEntityForProps,
  dispatchToast,
} from "./toastEntityBuilder";

import { upsertToast } from "./store";

function toaster(options: Partial<ToastEntity>): void {
  // create toast entity
  const props = buildToastEntityForProps(options);
  const propsWithMeta = buildToastEntityForMeta(props);
  upsertToast(dispatchToast(propsWithMeta as ToastEntity));
}

export { toaster };
