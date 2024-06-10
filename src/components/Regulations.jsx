import {useSelector} from "react-redux";
import {LANGUAGES_CONFIG} from "../locales";
import {InputWithKeyboard} from "./InputWithKeyboard";

export const Regulations = ()=> {
    const {language} = useSelector(state => state.actionReducer)
    return(
        <>
            <h1 className='title'>{LANGUAGES_CONFIG[language].REGULATIONS.REGULATIONS_TITLE}</h1>
            <InputWithKeyboard />
        </>
    )
}