import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { Paper, Typography } from "@mui/material"
import { ButtonCustom } from "../components/ButtonCustom"
import { LinkCustom } from "../components/LinkCustom"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Footer } from "../components/Footer"

export const ErrorStationPage = () => {
    const { language } = useSelector(state => state.actionReducer)
    const { stations } = useSelector(state => state.dataReducer);
    const location = useLocation()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const { connector, id } = location.state
    const currentStation = stations.find(station => station.id === id)
    // const connector = currentStation?.connectors.find(connector => connector.status === 'Occupied')

    const navigate = useNavigate();

    const handleGoToChargingConnectors = () => {
        navigate('/connector-type')
    }

    const handleBack = () => {
        navigate('/')
    }
    const handleConfirm = () => {
        setIsConfirmed(true)
    }

    console.log(location.state)
    return (
        <>
            <h1 className="title">{LANGUAGES_CONFIG[language].ERROR_STATION_PAGE.TITLE_PAGE}</h1>
            <div className="current-charging-card-wrapper">
                <Paper
                    sx={{
                        backgroundColor: '#FFDAD6',
                    }}
                    className="current-charging-card"
                    elevation={6}
                >
                    <div className="current-charging-card-header">
                        <div className="station-block">
                            <div className='station-card-number'>{id}</div>
                            <div className='station-card-name'>{LANGUAGES_CONFIG[language].CARD.STATION}</div>
                        </div>
                        <div className={`icon-block ${connector.type}`}>
                            <div className="icon-block-name">{connector.type}</div>
                            <div className='connector-type-card-ico'></div>
                        </div>
                    </div>
                    <div className="current-charging-card-body">

                        <div className="station-card-icon-wrapper">
                            <div className="station-card-icon-wrapper">
                                <div className={`station-card-icon ${connector.status}`}></div>
                            </div>
                        </div>
                        {!isConfirmed ?
                            <h3 className="subtitle">{LANGUAGES_CONFIG[language].ERROR_STATION_PAGE.SUBTITLE_PAGE_1}</h3> :
                            <>
                                <h3 className="subtitle">{LANGUAGES_CONFIG[language].ERROR_STATION_PAGE.SUBTITLE_PAGE_2}</h3>
                                <h3 className="article">{LANGUAGES_CONFIG[language].ERROR_STATION_PAGE.ARTICLE_PAGE}</h3>
                                <h1 className="title">+48-572-54-4345</h1>
                            </>

                        }
                    </div>
                    {!isConfirmed && <div className="buttons-container">
                        <div className="button-wrapper">
                            <ButtonCustom className='button' id='_FINISH' onClick={handleConfirm}>{LANGUAGES_CONFIG[language].BUTTONS.CONFIRM_CHECK}</ButtonCustom>
                        </div>
                    </div>}
                </Paper >
            </div >
            <Footer>
                <LinkCustom onClick={handleBack}>{LANGUAGES_CONFIG[language].BUTTONS.BACK}</LinkCustom>
            </Footer>



        </>
    )
}