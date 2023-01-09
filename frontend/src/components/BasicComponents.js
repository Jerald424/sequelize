import { useColors } from "customHooks/ColorsHook"

export const Container = ({ children }) => {
    const { colors } = useColors()
    return (
        <div style={{ backgroundColor: colors?.backgroundColor, flex: 1, padding: 15, height: '100vh' }}>{children}</div>
    )
}