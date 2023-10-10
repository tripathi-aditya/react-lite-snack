import { useReducer } from "react";
import {
  ReducerActions,
  StoreState,
  ToastContainerEntity,
  ToastEntity,
  ToastOperations,
} from "../types/core";
// let toastCollection: ToastEntity[] = [];
// let toastContainerCollection: ToastContainerEntity[] = [];

const reducer = (state: StoreState, action: ReducerActions): StoreState => {
  switch (action.type) {
    case ToastOperations.LOAD:
      return {
        ...state,
        toasts: [...state.toasts, action.data],
      };
    case ToastOperations.UNLOAD:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => action.data.id !== toast.id),
      };
    default:
      return state;
  }
};

const useStore = () => {
  const [storeState, dispatch] = useReducer(reducer, {
    toasts: [] as ToastEntity[],
    toastContainers: [] as ToastContainerEntity[],
  });
};
