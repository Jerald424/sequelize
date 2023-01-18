
export default function Button({
  size = "sm",
  children,
  onClick,
  variant = "success",
  btnLoading,
  showText = true,
  className,
  modelId,
  toggle = "model",
  ...props
}) {
  return (
    <button
      className={`btn btn-${size} btn-${variant} dajc ${{ ...className }}`}
      onClick={onClick}
      {...props}
      data-bs-toggle={toggle}
      data-bs-target={"exampleModal"}
    >
      {btnLoading && (
        <div class={`spinner-border spinner-border-sm ${showText && "me-2"}`} />
      )}
      {showText && children}
    </button>
  );
}