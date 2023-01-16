import { useColors } from "customHooks/ColorsHook"
import { ThemeStore } from "store/theme/colorStore";
import '../styles.css'

export const Hover = ({ children, className, color = false, ...props }) => {
    const { colors } = useColors();
    const { isDark } = ThemeStore.useState();
    return (
        <div {...props} className={`${color ? isDark ? "hover-dark-color" : "hover-light-color" : isDark ? "hover-dark" : "hover-light"} ${className}`}>{children}</div>
    )
}