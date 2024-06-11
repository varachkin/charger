import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { useLocation, useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import { LinkCustom } from "../components/LinkCustom"
import { CurrentChargingCard } from "../components/CurrentChargingCard"

export const ChargingPage = () => {
    const { language } = useSelector(state => state.actionReducer)
    const navigate = useNavigate();
    const location = useLocation()

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <>
            <h1 className="title">{LANGUAGES_CONFIG[language].CHARGING_PAGE.TITLE_PAGE}</h1>
            <div className="current-charging-card-wrapper">
                <CurrentChargingCard station={location.state}/>
            </div>


            <Footer>
                <LinkCustom onClick={handleBack}>{LANGUAGES_CONFIG[language].BUTTONS.BACK}</LinkCustom>
            </Footer>
        </>
    )
}