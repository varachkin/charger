import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { Paper, Typography } from "@mui/material"
import { ButtonCustom } from "../components/ButtonCustom"
import { LinkCustom } from "../components/LinkCustom"
import { useNavigate } from "react-router-dom"

export const InitializationConnectionPage = () => {
    const id = 2;
    const { language } = useSelector(state => state.actionReducer)
    const navigate = useNavigate();

    const handleGoToChargingConnectors = () => {
        navigate('/connector-type')
    }

    const handleConfirm = () => {
        const random = Math.round(Math.random())

        if (random) {
            navigate('/preparing', {state: id})
        } else {

        }
    }

    return (
        <>
            <h1 className="title">{LANGUAGES_CONFIG[language].CHARGING_PAGE.TITLE_PAGE}</h1>
            <div className="current-charging-card-wrapper">
                <Paper
                    className="current-charging-card"
                    elevation={6}
                >
                    <div className="current-charging-card-header">
                        <div className="station-block">
                            <div className='station-card-number'>{1}</div>
                            <div className='station-card-name'>{LANGUAGES_CONFIG[language].CARD.STATION}</div>
                        </div>
                        <div className={`icon-block ${''}`}>
                            {/* <div className="icon-block-name">{station?.charger.id}</div> */}
                            <div className='connector-type-card-ico'></div>
                        </div>
                    </div>
                    <div className="current-charging-card-body">

                        <div className="station-card-icon-wrapper">
                            <div className={`station-card-icon ${''}`}></div>
                        </div>

                        < h3 className="current-charging-card-description">
                            <span className="charging-card-description-block">sdgsdgsdg</span>
                            <span className="charging-card-description-block-bold">{'1 h 04 min'}</span>
                            {'|'}
                            <span className="charging-card-description-block">sjdhgjs</span>
                            <span className="charging-card-description-block-bold">~ {' 34 min'}</span>
                        </h3>
                        <Typography
                            component='div'
                            className="current-charging-card-info"
                            sx={{ '& .MuiTypography-root': { fontSize: '3vw', padding: '1.5vw 2.5vw' } }}
                        >
                            <div className="article-title">sdgjkhsdjkghskjg</div>
                            <div >
                                <div><LinkCustom id='_RECIPT' onClick={() => { }}>{LANGUAGES_CONFIG[language].CHARGING_PAGE.INFO_LINK_RECIPT}</LinkCustom></div>
                                <div><LinkCustom id='_INVOICE' onClick={() => { }}>{LANGUAGES_CONFIG[language].CHARGING_PAGE.INFO_LINK_INVOICE}</LinkCustom></div>
                            </div>
                        </Typography>
                    </div>
                    <div className="buttons-container">
                        <div className="button-wrapper">
                            <ButtonCustom className='button' id='_FINISH' onClick={handleConfirm}>{LANGUAGES_CONFIG[language].BUTTONS.CONFIRM}</ButtonCustom>
                        </div>
                        <div className="button-wrapper">
                            <ButtonCustom className='button' variant="outlined" onClick={handleGoToChargingConnectors}>{LANGUAGES_CONFIG[language].BUTTONS.MANUAL_CHOOSE}</ButtonCustom>
                        </div>
                    </div>
                </Paper >
            </div >



        </>
    )
}