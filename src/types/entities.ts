import { ToastProps } from "./components";
import {
  StoreListener,
  StoreActions,
  StoreState,
  ToastMetaData,
} from "./entitiesAttributes";

type StoreEntity = {
  state: StoreState;
  listeners: StoreListener[];
  update: (actions: StoreActions) => void;
};

type ToastEntity = ToastProps & ToastMetaData;

export { StoreEntity, ToastEntity };
