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

function upsertToast(toast: ToastEntity) {
  const store = Object.create(Store);
  store.update({ data: toast, type: "UPSERT" });
  deleteToast(toast);
}

function deleteToast(toast: ToastEntity) {
  const store = Object.create(Store);
  setTimeout(
    () => store.update({ data: toast, type: "DELETE" }),
    toast.displayTime
  );
}

function useStoreEffect(listener: StoreListener, unSubscribe?: boolean) {
  const store = Object.create(Store);

  if (unSubscribe)
    store.listeners = store.listeners.filter(
      (storeListener: StoreListener) => storeListener !== listener
    );
  // could return a ref to be used as as toast container
  store.listeners.push(listener);
}

export { deleteToast, upsertToast, useStoreEffect };
