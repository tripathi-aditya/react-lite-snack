import { TOAST_OPERATIONS, VARIANTS } from "./constants";
import { ToastEntity } from "./entities";

type StoreState = Record<string, ToastEntity[]>;

type StoreListener = (state: StoreState, storeAction: StoreActions) => unknown;

type StoreActions = {
  type: TOAST_OPERATIONS;
  data: ToastEntity;
};

interface ToastMetaData {
  id: string;
  displayTime: number;
}

type ToastEntityFactory = Record<
  string,
  (fractionalToast: Partial<ToastEntity>) => ToastEntityFactory
>;

export {
  StoreActions,
  StoreListener,
  StoreState,
  ToastEntityFactory,
  ToastMetaData,
};
