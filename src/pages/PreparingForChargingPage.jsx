import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { useLocation, useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import { LinkCustom } from "../components/LinkCustom";
import { ButtonCustom } from "../components/ButtonCustom";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Modal } from "../components/Modal";
import { Regulations } from "../components/Regulations";
import { Policy } from "../components/Policy";

export const PreparingForChargingPage = () => {
    const [stationID, setStationID] = useState(null)
    const { language } = useSelector(state => state.actionReducer)
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpenModalRegulations, setIsOpenModalRegulations] = useState(false)
    const [isOpenModalPolicy, setIsOpenModalPolicy] = useState(false)
    const [isChecked, setIsChecked] = useState({
        regulations: false,
        private_policy: false,
    })
    const [isError, setIsError] = useState(false)
    console.log(location.state)
    const handleChange = (event) => {
        setIsChecked(prev => ({ ...prev, [event.target.name]: !prev[event.target.name] }))
    }

    const handleBack = () => {
        navigate(-1)
    }

    const handleGoToPayment = () => {
        if (isChecked.regulations && isChecked.private_policy) {
            setIsError(false)
            navigate('/card-payment', { state: stationID })
        } else {
            setIsError(true)
        }
    }
    const handleCloseModalRegulations = () => {
        setIsOpenModalRegulations(false)
    }

    const handleOpenModalRegulations = () => {
        setIsOpenModalRegulations(true)
    }

    const handleCloseModalPolicy = () => {
        setIsOpenModalPolicy(false)
    }

    const handleOpenModalPolicy = () => {
        setIsOpenModalPolicy(true)
    }

    useEffect(() => {
        setStationID(location.state)
    }, [])
    return (
        <>
            <div>
                <h1 className="title">{LANGUAGES_CONFIG[language].PREPARING_FOR_CHARGING_PAGE.TITLE_PAGE}</h1>
                <article className='article'>
                    <div className='article-title'>Title</div>
                    <div className='article-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae doloremque fugit illum
                        mollitia nihil nobis provident quisquam saepe tempore! Ab amet eveniet minus numquam rem
                        tenetur. Consequatur dolor, nesciunt
                    </div>
                </article>
                <article className='article'>
                    <div className='article-title'>Title</div>
                    <div className='article-description'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae doloremque fugit illum
                        mollitia nihil nobis provident quisquam saepe tempore! Ab amet eveniet minus numquam rem
                        tenetur. Consequatur dolor, nesciunt
                    </div>
                </article>
                <article className='article'>
                    <div className='article-title'>{LANGUAGES_CONFIG[language].FORM.FORM_TITLE}</div>
                    <FormControl
                        className='form'
                        required
                        error={isError}
                        sx={{
                            '& .MuiFormHelperText-root': { fontSize: '3vw', color: '#A50011' },
                            '& .MuiSvgIcon-root': { fontSize: '4.5vw' },
                            '& .MuiTypography-root': { fontSize: '3vw', padding: '0 2vw' }
                        }}
                        component="fieldset"
                        variant="standard"
                    >
                        {isError && <FormHelperText

                        >
                            {LANGUAGES_CONFIG[language].FORM.FORM_ERROR_MESSAGE}
                        </FormHelperText>}
                        <FormGroup sx={{}}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={isChecked.regulations} onChange={handleChange}
                                        name="regulations" />
                                }
                                label={<div
                                    className='article-description'>{LANGUAGES_CONFIG[language].FORM.REGULATIONS}{
                                        <LinkCustom onClick={handleOpenModalRegulations}>
                                            {LANGUAGES_CONFIG[language].FORM.REGULATIONS_LINK}
                                        </LinkCustom>}
                                </div>}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={isChecked.private_policy} onChange={handleChange}
                                        name="private_policy" />
                                }
                                label={<div
                                    className='article-description'>{LANGUAGES_CONFIG[language].FORM.PRIVATE_POLICY}{
                                        <LinkCustom onClick={handleOpenModalPolicy}>
                                            {LANGUAGES_CONFIG[language].FORM.PRIVATE_POLICY_LINK}
                                        </LinkCustom>}
                                </div>}
                            />
                        </FormGroup>
                    </FormControl>
                </article>
            </div>
            <ButtonCustom onClick={handleGoToPayment}>
                {LANGUAGES_CONFIG[language].BUTTONS.START_CHARGING}
            </ButtonCustom>
            <Footer>

                <LinkCustom onClick={handleBack}>
                    {LANGUAGES_CONFIG[language].BUTTONS.BACK}
                </LinkCustom>
            </Footer>
            {isOpenModalRegulations && <Modal handleCloseModal={handleCloseModalRegulations}><Regulations /></Modal>}
            {isOpenModalPolicy && <Modal handleCloseModal={handleCloseModalPolicy}><Policy /></Modal>}
        </>

    )
}