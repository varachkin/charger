import {useSelector} from "react-redux";
import {LANGUAGES_CONFIG} from "../locales";

export const Policy = ()=> {
    const {language} = useSelector(state => state.actionReducer)
    return(
        <>
            <h1 className='title'>{LANGUAGES_CONFIG[language].PRIVATE_POLICY.PRIVATE_POLICY_TITLE}</h1>
        </>
    )
}