import { VARIANTS } from "./constants";

// possible that all entities are namesapces?
type StoreEntity = any;
type ToastContainerEntity = any;
type ToastEntity = ToastProps & ToastMetaData;

type ToastProps = ToastRequiredProps & ToastOptionalProps;

interface ToastOptionalProps {
  onLoadCB?: Function;
}

interface ToastMetaData {
  id: string;
  displayTime: number;
}

interface ToastRequiredProps {
  variant: VARIANTS;
  message: string;
}

enum ToastOperations {
  UPSERT = "UPSERT", // addition or removal
  DELETE = "DELETE",
  MOUNT = "MOUNT",
  UNMOUNT = "UNMOUNT",
}

enum ToastContainerOperations {
  LOAD = "LOAD",
  UNLOAD = "UNLOAD",
  EMPTY = "EMPTY",
  UPDATE = "UPDATE",
}

type StoreOperations = {
  // pass the operation on which entity we want perform
  type: ToastOperations | ToastContainerOperations;
  data: ToastEntity | ToastContainerEntity;
};

interface StoreState {
  toasts: ToastEntity[];
  toastContainers: ToastContainerEntity[];
}

export {
  StoreState,
  StoreOperations,
  ToastContainerEntity,
  ToastEntity,
  ToastOperations,
  ToastProps,
};
