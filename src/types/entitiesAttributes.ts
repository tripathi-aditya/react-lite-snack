import { functionUnknown } from ".";
import { POSITIONS, TOAST_OPERATIONS, VARIANTS } from "./constants";
import { ToastEntity } from "./entities";

type StoreState = Record<string, ToastEntity[]>;

type StoreListener = (state: StoreState, storeAction: StoreActions) => unknown;

type StoreActions = {
  type: TOAST_OPERATIONS;
  data: Partial<ToastEntity>;
};

type ToastMetaData = {
  displayTime: number;
  id: string;
  deleteTimeout?: NodeJS.Timeout;
  onCloseCB?: functionUnknown;
  onLoadCB?: functionUnknown;
  position?: POSITIONS;
};

type ToastEntityFactory = Record<
  string,
  (fractionalToast: Partial<ToastEntity>) => ToastEntityFactory | ToastEntity
>;

export {
  StoreActions,
  StoreListener,
  StoreState,
  ToastEntityFactory,
  ToastMetaData,
};
