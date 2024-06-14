import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { Footer } from "../components/Footer"
import { ButtonCustom } from "../components/ButtonCustom"
import { useNavigate } from "react-router-dom"

export const RatingPage = () => {
    const navigate = useNavigate()
    const { language } = useSelector(state => state.actionReducer)

    const handleToThanks = ()=> {
        navigate('/thanks')
    }
    return (
        <>
            <div>
                <h1 className="title">{LANGUAGES_CONFIG[language].RATING_PAGE.TITLE_PAGE}</h1>
                <h3 className="subtitle">{LANGUAGES_CONFIG[language].RATING_PAGE.SUBTITLE_PAGE}</h3>
                <div className="rating-buttons-wrapper">
                    <div className='button-wrapper'><ButtonCustom onClick={handleToThanks} variant='outlined'>{LANGUAGES_CONFIG[language].RATING_PAGE.BUTTON_4_STAR}</ButtonCustom></div>
                    <div className='button-wrapper'><ButtonCustom onClick={handleToThanks} variant='outlined'>{LANGUAGES_CONFIG[language].RATING_PAGE.BUTTON_3_STAR}</ButtonCustom></div>
                    <div className='button-wrapper'><ButtonCustom onClick={handleToThanks} variant='outlined'>{LANGUAGES_CONFIG[language].RATING_PAGE.BUTTON_2_STAR}</ButtonCustom></div>
                    <div className='button-wrapper'><ButtonCustom onClick={handleToThanks} variant='outlined'>{LANGUAGES_CONFIG[language].RATING_PAGE.BUTTON_1_STAR}</ButtonCustom></div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>

    )
}