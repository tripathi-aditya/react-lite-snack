import { Toast } from "..";
import { useToastContainer } from "../../hooks/useToastContainer";

export const ToastContainer = () => {
  const { toasts } = useToastContainer();

  return (
    <div>
      {toasts?.map((toast) => (
        <Toast key={Math.random()} {...toast} />
      ))}
    </div>
  );
};
