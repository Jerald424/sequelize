import { useColors } from "customHooks/ColorsHook"

export const HeadingText = ({ children, style }) => {
    const { colors } = useColors();
    return (
        <h4 style={{ color: colors.heading, fontWeight: "bold", margin: 0, ...style }}>{children}</h4>
    )
}

export const SubHeading = ({ children }) => {
    const { colors } = useColors()
    return (
        <h6 style={{ color: colors?.subHeading, fontWeight: 'bold', margin: 0 }}>{children}</h6>
    )
}

export const Para = ({ children, style, ...props }) => {
    const { colors } = useColors()
    return (
        <p {...props} style={{ color: colors?.textSecondary, margin: 0, ...style }}>{children}</p>
    )
}