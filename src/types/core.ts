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
// creates a new toast with provided configs (generates toast component props)
type ToastBuilderArgument = ToasterOptions; // extend this as you like, convert to interface while extending

type ToastProps = {
  // onPauseCallback: () => {};
  // onResumeCallback: () => {};
} & ToasterOptions;

type ToastContainer = {
  position: ToastContainerPositions;
  loadDirection: ToastLoadingDirection;
  ToastQueue: [];
};

export {
  ToastBuilderArgument,
  ToastContainer,
  ToasterOptions,
  ToastProps,
  ToastVariants,
};
