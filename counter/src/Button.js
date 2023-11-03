import { Children } from "react";



function Button({ ...props }) {
    return(
        <button {...props}>{Children}</button>
    )
}
export default Button