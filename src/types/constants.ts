enum CONTAINER_POSITIONS {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}
type LOADING_DIRECTIONS = "top-down" | "bottom-up";
enum TOAST_OPERATIONS {
  UPSERT = "UPSERT",
  DELETE = "DELETE",
  MOUNT = "MOUNT",
  UNMOUNT = "UNMOUNT",
}

type VARIANTS = "success" | "failure" | "warning";

export { CONTAINER_POSITIONS, LOADING_DIRECTIONS, TOAST_OPERATIONS, VARIANTS };
