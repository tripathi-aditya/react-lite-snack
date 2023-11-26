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

const store = Object.create(Store);

function upsertToast(toast: ToastEntity) {
  const toastEntityWithClose = {
    ...toast,
    deleteTimeout: setTimeout(
      () => store.update({ data: toast, type: "DELETE" }),
      toast.displayTime
    ),
    onCloseClick: () => deleteToast(toast),
  } as ToastEntity;
  store.update({ data: toastEntityWithClose, type: "UPSERT" });
}

function deleteToast(toast: ToastEntity) {
  clearTimeout(toast.deleteTimeout);
  store.update({ data: toast, type: "DELETE" });
}

function useStore(listener: StoreListener, unSubscribe?: boolean) {
  if (unSubscribe)
    store.listeners = store.listeners.filter(
      (storeListener: StoreListener) => storeListener !== listener
    );
  // could return a ref to be used as as toast container
  store.listeners.push(listener);
}

export { deleteToast, upsertToast, useStore };
