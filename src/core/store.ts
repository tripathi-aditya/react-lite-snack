import { useState } from "react";
import {
  // StoreEntity,
  StoreOperations,
  ToastContainerEntity,
  ToastEntity,
  ToastOperations,
} from "../types/core";

const StoreEntity = {
  state: {
    toasts: [] as ToastEntity[],
  },
  listeners: [], // so that multiple entities can subscribe to store

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
        break;
    }
    this.listeners.forEach((listener) => {
      listener(this.state);
    });
  },
};

export function upsertToast(toast: ToastEntity) {
  const store = Object.create(StoreEntity);
  store.update({ data: toast, type: "UPSERT" });
}

export function deleteToast(toast: ToastEntity) {
  const store = Object.create(StoreEntity);
  store.update({ data: toast, type: "DELETE" });
}

export function useStore(listener) {
  const store = Object.create(StoreEntity);
  store.listeners.push(listener);
}
