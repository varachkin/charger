import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { Footer } from "../components/Footer"
import { ButtonCustom } from "../components/ButtonCustom"
import { LinkCustom } from "../components/LinkCustom"
import { useNavigate } from "react-router-dom"

export const CheckingConnectionPage = () => {
    const {language} = useSelector(state => state.actionReducer)
    const navigate = useNavigate();

    const handleBack = ()=> {
        navigate(-1)
    }
    return (
        <>
        <div className="make-sure-page-wrapper">
            <h1 className="title">{LANGUAGES_CONFIG[language].MAKE_SURE_PAGE.TITLE_PAGE}</h1>
            <div className="img-block"></div>
            <h3 className="subtitle">{LANGUAGES_CONFIG[language].MAKE_SURE_PAGE.SUBTITLE_PAGE}</h3>
            <ButtonCustom>{LANGUAGES_CONFIG[language].BUTTONS.CONFIRM}</ButtonCustom>
        </div>
        <Footer>
           
            <LinkCustom onClick={handleBack}>{LANGUAGES_CONFIG[language].BUTTONS.BACK}</LinkCustom>
        </Footer>
        </>
        
    )
}