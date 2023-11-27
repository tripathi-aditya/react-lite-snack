import "./toastContainer.css";
import { useToastContainer } from "../../hooks/useToastContainer";
import { POSITIONS } from "../..";
import Toast from "../Toast/Toast";

const ToastContainers = (): React.ReactElement => {
  const { toastContainers } = useToastContainer();

  const ToastContainerTop = (): React.ReactElement => {
    return (
      <div className="container container__top">
        {toastContainers.get(POSITIONS.TOP)?.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  const ToastContainerRight = (): React.ReactElement => {
    return (
      <div className="container container__right">
        {toastContainers.get(POSITIONS.RIGHT)?.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  const ToastContainerBottom = (): React.ReactElement => {
    return (
      <div className="container container__bottom">
        {toastContainers.get(POSITIONS.BOTTOM)?.map((toast) => (
          <Toast key={toast.id} {...toast} />
        ))}
      </div>
    );
  };

  const ToastContainerLeft = (): React.ReactElement => {
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

export default ToastContainers;
