import {
  StoreEntity,
  StoreListener,
  ToastEntity,
  TOAST_OPERATIONS,
} from "../types";

const Store: StoreEntity = {
  state: {
    toasts: [],
  },
  listeners: [], // so that multiple entities can subscribe to store

  update: function (action) {
    switch (action.type) {
      case TOAST_OPERATIONS.UPSERT:
        this.state.toasts.push(action.data as ToastEntity);
        break;
      case TOAST_OPERATIONS.DELETE:
        this.state.toasts = this.state.toasts.filter(
          (toast: ToastEntity) => action.data.id !== toast.id
        );
        break;
      default:
        break;
    }
    // let subscribers know state on every update
    this.listeners.forEach((listener: StoreListener) => {
      listener(this.state, action);
    });
  },
};

const storeInstance: StoreEntity = Object.create(Store);

function upsertToast(toast: ToastEntity): void {
  const toastEntityWithClose: ToastEntity = {
    ...toast,
    deleteTimeout: setTimeout(function () {
      storeInstance.update({ data: toast, type: TOAST_OPERATIONS.DELETE });
    }, toast.displayTime),
    onCloseClick: function () {
      deleteToast(toast);
    },
  };
  storeInstance.update({
    data: toastEntityWithClose,
    type: TOAST_OPERATIONS.UPSERT,
  });
}

function deleteToast(toast: ToastEntity): void {
  clearTimeout(toast.deleteTimeout);
  storeInstance.update({ data: toast, type: TOAST_OPERATIONS.DELETE });
}

function useStore(listener: StoreListener, unSubscribe?: boolean): void {
  if (unSubscribe) {
    storeInstance.listeners = storeInstance.listeners.filter(
      (storeListener: StoreListener) => storeListener !== listener
    );
    return;
  }

  // could return a ref to be used as as toast container
  storeInstance.listeners.push(listener);
}

export { deleteToast, upsertToast, useStore };
