import { useEffect, useReducer, useState } from "react";
import { useStoreEffect } from "../core/store";
import {
  POSITIONS,
  StoreActions,
  StoreState,
  TOAST_OPERATIONS,
  ToastEntity,
} from "../types";

const initialContainerBuckets = new Map([
  [POSITIONS.TOP, [] as ToastEntity[]],
  [POSITIONS.RIGHT, [] as ToastEntity[]],
  [POSITIONS.BOTTOM, [] as ToastEntity[]],
  [POSITIONS.LEFT, [] as ToastEntity[]],
]);

export const useToastContainer = () => {
  function containersReducer(state: Containers, action: ContainerActions) {
    const { data: toastEntity, type } = action;
    switch (type) {
      case TOAST_OPERATIONS.UPSERT:
        return new Map(state).set(toastEntity?.position, [
          ...(state.get(toastEntity?.position) || []),
          toastEntity,
        ]);
      case TOAST_OPERATIONS.DELETE:
        return new Map(state).set(
          toastEntity?.position,
          state
            .get(toastEntity?.position)
            ?.filter((toast) => toast.id !== toastEntity.id) || []
        );
      default:
        return state;
    }
  }
  const [toastContainers, dispatch] = useReducer(
    containersReducer,
    initialContainerBuckets
  );

  const onStoreSubscribe = (
    storeState: StoreState,
    operationData: StoreActions
  ) => {
    // because we have no custom local types as of now
    dispatch({ ...operationData });
  };

  useEffect(() => {
    useStoreEffect(onStoreSubscribe);
    return () => useStoreEffect(onStoreSubscribe, true);
  }, []);

  return {
    toastContainers,
  };
};

type Containers = Map<POSITIONS, ToastEntity[]>;
type ContainerActions = StoreActions;
