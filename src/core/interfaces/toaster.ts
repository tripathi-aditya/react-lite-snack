import { ToastProps, ToastEntity } from "../../types/core";
import {
  buildToastEntityForMeta,
  buildToastEntityForProps,
} from "../builders/ToastEntityBuilder";
import { upsertToast } from "../store";

export function toaster(options: ToastProps) {
  // create toast entity
  let props = buildToastEntityForProps(options);
  const propsWithMeta = buildToastEntityForMeta(props);
  upsertToast(propsWithMeta as ToastEntity);
}
