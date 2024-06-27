import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { useLocation, useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import { LinkCustom } from "../components/LinkCustom"
import { CurrentChargingCard } from "../components/CurrentChargingCard"

export const ChargingPage = () => {
    const { language } = useSelector(state => state.actionReducer)
    const { stations } = useSelector(state => state.dataReducer)
    const navigate = useNavigate();
    const location = useLocation()
    const {connector, id} = location.state

    const handleBack = () => {
        navigate(-1)
    }

    console.log(location.state, 'page')

    return (
        <>
            <h1 className="title">{LANGUAGES_CONFIG[language].CHARGING_PAGE.TITLE_PAGE}</h1>
            <div className="current-charging-card-wrapper">
                <CurrentChargingCard connector={connector} id={id}/>
            </div>


            <Footer>
                <LinkCustom onClick={handleBack}>{LANGUAGES_CONFIG[language].BUTTONS.BACK}</LinkCustom>
            </Footer>
        </>
    )
}