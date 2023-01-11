import { useColors } from "customHooks/ColorsHook"

export const Container = ({ children, style, className, padding = 15 }) => {
    const { colors } = useColors()
    return (
        <div className={`${className}`} style={{ padding: padding, ...style }}>{children}</div>
    )
}
/* 
#pagewrap {
  background-color: LightGreen;
  flex-grow: 1; /* make it stretch to the bottom even if little content */
