import "./toastContainer.css";
import { Toast } from "..";
import { useToastContainer } from "../../hooks/useToastContainer";
import { POSITIONS } from "../..";

export const ToastContainers = () => {
  const { toastContainers } = useToastContainer();

  const ToastContainerTop = () => {
    return (
      <div className="container container__top">
        {toastContainers.get(POSITIONS.TOP)?.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  const ToastContainerRight = () => {
    return (
      <div className="container container__right">
        {toastContainers.get(POSITIONS.RIGHT)?.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  const ToastContainerBottom = () => {
    return (
      <div className="container container__bottom">
        {toastContainers.get(POSITIONS.BOTTOM)?.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  const ToastContainerLeft = () => {
    return (
      <div className="container container__left">
        {toastContainers.get(POSITIONS.LEFT)?.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  return (
    <>
      <ToastContainerTop />
      <ToastContainerRight />
      <ToastContainerBottom />
      <ToastContainerLeft />
    </>
  );
};
