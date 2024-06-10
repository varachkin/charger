import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { useLocation } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Button, Link } from "@mui/material"

export const PreparingForChargingPage = () => {
    const { language } = useSelector(state => state.actionReducer)
    const location = useLocation();
    return (
        <>
            <div>
                <h1 className="title">{LANGUAGES_CONFIG[language].PREPARING_FOR_CHARGING_PAGE.TITLE_PAGE}</h1>

            </div>
            <Footer>
                <Button className="button"> {LANGUAGES_CONFIG[language].BUTTONS.START_CHARGING}</Button>
                <Link
                    component="button"
                    variant="body2"
                    className="link"
                    fontSize='3.5vw'
                >
                   {LANGUAGES_CONFIG[language].BUTTONS.BACK}
                </Link>
            </Footer>
        </>

    )
}