import { ToastProps } from "./components";
import {
  StoreListener,
  StoreActions,
  StoreState,
  ToastMetaData,
} from "./entitiesAttributes";

// possible that all entities are namesapces?
type StoreEntity = {
  state: StoreState;
  listeners: StoreListener[];
  update: (actions: StoreActions) => void; //should this return updated store?
};

type ToastEntity = ToastProps & ToastMetaData;

export { StoreEntity, ToastEntity };
