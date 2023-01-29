import { useColors } from "customHooks/ColorsHook"

export const HeadingText = ({ children, style, ...props }) => {
  const { colors } = useColors();
  return (
    <h4
      {...props}
      style={{
        color: colors.heading,
        fontWeight: "bold",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </h4>
  );
};

export const SubHeading = ({ children, ...props }) => {
  const { colors } = useColors();
  return (
    <h6 style={{ color: colors?.subHeading, fontWeight: "bold" }} {...props}>
      {children}
    </h6>
  );
};

export const Para = ({ children, style, ...props }) => {
    const { colors } = useColors()
    return (
        <p {...props} style={{ color: colors?.textSecondary, margin: 0, ...style }}>{children}</p>
    )
}
/* 
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
*/