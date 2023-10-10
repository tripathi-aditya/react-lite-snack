import { ToastProps, ToasterOptions } from "../../types/core";
import ToastBuilder from "../builders/ToastBuilder";

export default function buildToast(
  toastBuildOptions: ToasterOptions
): ToastProps | null {
  // return a "complete" toast prop object
  const { variant, message, onLoadCallback, onUnloadCallback } =
    toastBuildOptions;
  const toastBuilder = new ToastBuilder();

  // required props
  toastBuilder.setVariant(variant).setMessage(message);

  // optional props
  if (onLoadCallback) toastBuilder.setOnLoad(onLoadCallback);
  if (onUnloadCallback) toastBuilder.setOnUnload(onUnloadCallback);

  return toastBuilder.build();
}
