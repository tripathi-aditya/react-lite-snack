enum POSITIONS {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}
type LOADING_DIRECTIONS = "top-down" | "bottom-up";
enum TOAST_OPERATIONS {
  UPSERT = "UPSERT",
  DELETE = "DELETE",
}

type VARIANTS = "success" | "failure" | "warning";

export { POSITIONS, LOADING_DIRECTIONS, TOAST_OPERATIONS, VARIANTS };
