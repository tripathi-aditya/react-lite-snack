type ToastContainerPositions = "top" | "bottom" | "left" | "right";

type ToastLoadingDirection = "top-down" | "bottom-up";

type ToastVariants = "success" | "failure" | "warning";

interface ToasterOptions {
  // might build a new toast or schedule loading an existing one
  variant: ToastVariants;
  message: string;
  onLoadCallback?: Function;
  onUnloadCallback?: Function;
}

type ToastProps = {
  // rename to
  // onPauseCallback: () => {};
  // onResumeCallback: () => {};
} & ToasterOptions;

type ToastContainerProps = {
  position: ToastContainerPositions;
  loadDirection: ToastLoadingDirection;
  ToastQueue: [];
};

type ToastEntity = any; //represents complete toast props, user and system defined together
type ToastContainerEntity = any; //represents complete toast container props, user and system defined together

// type Toast = React.ReactElement<ToastProps>;
// type ToastContainer = React.ReactElement<ToastContainerProps>;

enum ToastOperations {
  LOAD,
  UNLOAD,
}

enum ToastContainerOperations {
  LOAD,
  UNLOAD,
  EMPTY,
}

type ReducerActions = {
  // pass the operation on which entity we want perform
  type: ToastOperations | ToastContainerOperations;
  data: ToastEntity | ToastContainerEntity;
};

interface StoreState {
  toasts: ToastEntity[];
  toastContainers: ToastContainerEntity[];
}

export {
  ReducerActions,
  StoreState,
  ToastContainerEntity,
  ToastContainerProps,
  ToastEntity,
  ToasterOptions,
  ToastOperations,
  ToastProps,
  ToastVariants,
};
