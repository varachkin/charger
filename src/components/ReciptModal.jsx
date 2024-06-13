import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { InputWithKeyboard } from "./InputWithKeyboard"
import { ButtonCustom } from "./ButtonCustom"

export const ReciptModal = () => {
    const { language } = useSelector(state => state.actionReducer)
    return (
        <div>
            <h1 className="title">{LANGUAGES_CONFIG[language].MODAL_CONTENT.TITLE_EMAIL}</h1>
            <article className='modal-article'>
                <span className='modal-article-title'>{LANGUAGES_CONFIG[language].MODAL_CONTENT.ARTICLE_EMAIL_BOLD}</span>
                <span className='modal-article-description'>{LANGUAGES_CONFIG[language].MODAL_CONTENT.ARTICLE_EMAIL_REGULAR}</span>
            </article>
            <article className='modal-article'>
                <InputWithKeyboard
                    label={LANGUAGES_CONFIG[language].MODAL_CONTENT.TITLE_EMAIL}
                    placeholder={LANGUAGES_CONFIG[language].MODAL_CONTENT.TITLE_EMAIL}
                    id='_email'

                />
            </article>

            <ButtonCustom>{LANGUAGES_CONFIG[language].BUTTONS.SUBMIT}</ButtonCustom>

        </div>
    )
}