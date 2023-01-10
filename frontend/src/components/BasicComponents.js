import { useColors } from "customHooks/ColorsHook"

export const Container = ({ children, style, className, padding = 15 }) => {
    const { colors } = useColors()
    return (
        <div className={className} style={{ backgroundColor: colors?.backgroundColor, flex: 1, padding: padding, height: '100vh', ...style }}>{children}</div>
    )
}