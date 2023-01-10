import { useColors } from "customHooks/ColorsHook";

export default function Icon({ src, size = 20, style }) {
    const COMPONENT = src;
    const SIZE = size + "px";
    const { colors } = useColors()
    return (
        <div style={{ fontSize: SIZE, color: colors?.textSecondary, display: 'inline-flex', ...style }}>
            <COMPONENT />
        </div>
    )

}
