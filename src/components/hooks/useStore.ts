// infers UI state from StoreEntity

import { useEffect, useState } from "react";
import { useStore } from "../../core/store";

export const useToastContainer = () => {
  const [toasts, setToasts] = useState([]);
  const updateToasts = (storeState) => {
    setToasts([...storeState.toasts]);
  };
  useEffect(() => {
    useStore(updateToasts);
  }, [toasts]);

  return {
    toasts,
    setToasts,
  };
};
