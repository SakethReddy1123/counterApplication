

function Button({Children,...props }) {
    return(
        <button {...props}>{Children}</button>
    )
}
export default Button