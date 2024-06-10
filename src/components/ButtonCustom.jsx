import {LANGUAGES_CONFIG} from "../locales";
import {Button} from "@mui/material";

export const ButtonCustom = ({children, onClick, disabled})=> {
    return(
        <Button
            variant="contained"
            className="button"
            color="secondary"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </Button>
    )
}
