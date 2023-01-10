
export default function Button({ size = "sm", children, onClick, variant = 'success', btnLoading, showText = true, ...props }) {
    return (
        <button className={`btn btn-${size} btn-${variant} dajc`} onClick={onClick} {...props}>
            {
                btnLoading && <div class={`spinner-border spinner-border-sm ${showText && "me-2"}`} />
            }
            {showText &&
                children
            }
        </button>
    )
}