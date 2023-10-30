import { useEffect, useState } from "react";
import { useStore } from "../core/store";
import { StoreState, ToastEntity } from "../types";

export const useToastContainer = () => {
  const [toasts, setToasts] = useState<ToastEntity[]>([]);
  const sbscribeToStore = (storeState: StoreState) => {
    let { toasts } = storeState;
    setToasts([...toasts]);
  };
  useEffect(() => {
    useStore(sbscribeToStore);
  }, [toasts]);

  return {
    toasts,
    setToasts,
  };
};
