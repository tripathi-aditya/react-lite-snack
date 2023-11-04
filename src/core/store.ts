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
      listener(this.state);
    });
  },
};

function upsertToast(toast: ToastEntity) {
  const store = Object.create(Store);
  store.update({ data: toast, type: "UPSERT" });
  setTimeout(() => deleteToast(toast), toast.displayTime);
}

function deleteToast(toast: ToastEntity) {
  const store = Object.create(Store);
  store.update({ data: toast, type: "DELETE" });
}

function useStore(listener: StoreListener) {
  // could return a ref to be used as as toast container
  const store = Object.create(Store);
  store.listeners.push(listener);
}

export { deleteToast, upsertToast, useStore };
