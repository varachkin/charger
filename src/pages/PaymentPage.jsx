import { useLocation, useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { InputWithKeyboard } from "../components/InputWithKeyboard";
import { LinkCustom } from "../components/LinkCustom";
import { useSelector } from "react-redux";
import { LANGUAGES_CONFIG } from "../locales";

export const PaymentPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {id, connector} = location.state
    const { language } = useSelector(state => state.actionReducer)
    const handleBack = () => {
        navigate(-1)
    }
    const handleSuccess = () => {
        navigate('/charging', {state: {id, connector}})
    }

    const handleError = () => {
        navigate('')
    }

    
    return (
        <>
            <div className="terminal-page-wrapper">
                <h1 className="title">{LANGUAGES_CONFIG[language].CARD_PAYMENT_PAGE.TITLE_PAGE}</h1>
                <div className="terminal-img-block"></div>
                <h2 className="subtitle">{LANGUAGES_CONFIG[language].CARD_PAYMENT_PAGE.SUBTITLE_PAGE}</h2>
            </div>



            <Footer>
                <LinkCustom onClick={handleBack}>{LANGUAGES_CONFIG[language].BUTTONS.BACK}</LinkCustom>
                <div style={{ display: 'flex' }}><LinkCustom onClick={handleSuccess}>Success</LinkCustom><LinkCustom onClick={handleError}>Error</LinkCustom></div>
            </Footer>
        </>

    )
}