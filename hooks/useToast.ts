import { useRouter } from "next/navigation";
import { Bounce, toast, ToastOptions } from "react-toastify";

export default function useToast() {
  const router = useRouter();

  const showSuccessToast = (
    message: string,
    route?: string,
    setValues?: () => void
  ) => {
    const toastOptions: ToastOptions = {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      onClose: () => {
        if (setValues) {
          setValues();
        }

        if (route) return router.replace(route);
        else return undefined;
      },
    };

    toast.success(message, toastOptions);
  };

  const showErrorToast = (message: string) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
}
