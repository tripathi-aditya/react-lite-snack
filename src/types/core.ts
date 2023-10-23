import { CONTAINER_POSITIONS, VARIANTS } from "./constants";

// possible that all entities are namesapces?
type StoreEntity = {
  state: Record<string, ToastEntity[] | ToastContainerEntity[]>;
  update: (actions: StoreOperations) => void; //should this return updated store?
};
type ToastContainerEntity = {
  id: number;
  maxToast: number;
  direction: CONTAINER_POSITIONS;
};
type ToastEntity = ToastProps & ToastMetaData;

type ToastProps = ToastRequiredProps & ToastOptionalProps;

interface ToastOptionalProps {
  onLoadCB?: Function;
}

interface ToastMetaData {
  id: string;
  displayTime: number;
  direction: CONTAINER_POSITIONS;
}

interface ToastRequiredProps {
  variant: VARIANTS;
  message: string;
}

enum ToastOperations {
  UPSERT = "UPSERT",
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
  StoreEntity,
  StoreState,
  StoreOperations,
  ToastContainerEntity,
  ToastEntity,
  ToastOperations,
  ToastProps,
};
