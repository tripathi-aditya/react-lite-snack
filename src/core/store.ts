import {
  StoreOperations,
  ToastContainerEntity,
  ToastEntity,
  ToastOperations,
} from "../types/core";

const StoreEntity = {
  state: {
    toasts: [] as ToastEntity[],
    toastContainers: [] as ToastContainerEntity[],
  },

  update: function (action: StoreOperations) {
    switch (action.type) {
      case ToastOperations.UPSERT:
        this.state.toasts.push(action.data as ToastEntity);
        break;
      case ToastOperations.DELETE:
        this.state.toasts = this.state.toasts.filter(
          (toast: ToastEntity) => action.data.id !== toast.id
        );
        break;
      default:
        return this.state;
    }
  },
};

export function upsertToast(toast: ToastEntity) {
  const store = Object.create(StoreEntity);
  store.update({ data: toast, type: "UPSERT" });
  return store;
}

export function deleteToast(toast: ToastEntity) {
  const store = Object.create(StoreEntity);
  store.update({ data: toast, type: "DELETE" });
  return store;
}
