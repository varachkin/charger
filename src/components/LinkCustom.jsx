import {Link} from "@mui/material";

export const LinkCustom = ({children, onClick})=> {
    return(
        <Link
            component="button"
            className="link"
            fontSize='3.5vw'
            onClick={onClick}
        >
            {children}
        </Link>
    )
}