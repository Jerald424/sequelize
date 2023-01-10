import { useColors } from "customHooks/ColorsHook";
import { createContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { ThemeStore } from "store/theme/colorStore";

export const ToastCxt = createContext()
export default function ToastContext({ children }) {

    const { isDark } = ThemeStore.useState();

    const showToast = (msg = "error", mode = 'error') => {
        toast[mode](msg, {
            position: "top-right",
            autoClose: 1000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: isDark ? "dark" : "light",
        });
    }

    return (
        <ToastCxt.Provider value={showToast}>
            {children}
            <ToastContainer />

        </ToastCxt.Provider>
    )
}

