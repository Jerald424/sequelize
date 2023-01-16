import { useColors } from "customHooks/ColorsHook";
import { ThemeStore } from "store/theme/colorStore";
import "../styles.css"

export default function Hover({ children, className, style, color=false, ...props }) {
    const { isDark } = ThemeStore.useState();
    return (
        <div className={`${className} ${isDark ? "hover-dark" : "hover-light"} ${color ? isDark ? "dark-hover-color" : "light-hover-color" : null}`} style={{ ...style }} {...props}>{children}</div>
    )
}