import { useColors } from "customHooks/ColorsHook"

export const Container = ({ children, style, className, }) => {
    const { colors } = useColors()
    return (
        <div className={`${className} custom-container`} style={{ backgroundColor: colors?.backgroundColor, minHeight: "100vh", ...style }}>{children}</div>
    )
}
/* 
#pagewrap {
  background-color: LightGreen;
  flex-grow: 1; /* make it stretch to the bottom even if little content */
