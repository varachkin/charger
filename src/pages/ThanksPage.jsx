import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"

export const ThanksPage = () => {
    const { language } = useSelector(state => state.actionReducer)
    return (
        <>
            <div>
                <h1 className="title">{LANGUAGES_CONFIG[language].THANKS_PAGE.TITLE_PAGE}</h1>
                <h3 className="subtitle">{LANGUAGES_CONFIG[language].THANKS_PAGE.SUBTITLE_PAGE}</h3>
            </div>
        </>

    )
}