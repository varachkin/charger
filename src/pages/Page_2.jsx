import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"

export const Page_2 = () => {
    const {language} = useSelector(state => state.actionReducer)
    return (
        <>
        <div>
            <h1 className="title">{LANGUAGES_CONFIG[language].START_PAGE.TITLE}</h1>
            
        </div>
        <Footer></Footer>
        </>
        
    )
}