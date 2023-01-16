import { ThemeStore } from "store/theme/colorStore";
import "../styles.css"

export default function Hover({ children, className, style }) {
    const { isDark } = ThemeStore.useState();
    return (
        <div className={`${className} ${isDark ? "hover-dark" : "hover-light"}`} style={{ ...style }}>{children}</div>
    )
}