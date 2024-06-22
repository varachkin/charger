import { useSelector } from "react-redux"
import { LANGUAGES_CONFIG } from "../locales"
import { Paper, Typography } from "@mui/material"
import { ButtonCustom } from "../components/ButtonCustom"
import { LinkCustom } from "../components/LinkCustom"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const InitializationConnectionPage = ({ id = 2 }) => {
    const { language } = useSelector(state => state.actionReducer)
    const { stations } = useSelector(state => state.dataReducer);
    const [seconds, setSeconds] = useState(0)
    const [loader, setLoader] = useState('.')

    const currentStation = stations.find(station => station.id === id)
    const connector = currentStation?.connectors.find(connector => connector.status === 'Occupied')
    const navigate = useNavigate();

    const handleGoToChargingConnectors = () => {
        navigate('/connector-type')
    }

    const handleConfirm = () => {
        const random = Math.round(Math.random())

        if (random) {
            navigate('/preparing', { state: id })
        } else {
            navigate('/make-sure', { state: id })
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevCounter => {
                if (prevCounter === 100) {
                    clearInterval(intervalId);
                    return 100;
                }
                return prevCounter + 1;
            });
            setLoader(prevLoader => {
                if (prevLoader.length < 3) {
                    return prevLoader + '.'
                }
                return '.'
            })
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []);

    console.log(currentStation)
    return (
        <>
            <h1 className="title">{LANGUAGES_CONFIG[language].INITIALIZATION_PAGE.TITLE_PAGE}</h1>
            <div className="current-charging-card-wrapper">
                <Paper
                    className="current-charging-card"
                    elevation={6}
                >
                    <div className="current-charging-card-header">
                        <div className="station-block">
                            <div className='station-card-number'>{id}</div>
                            <div className='station-card-name'>{LANGUAGES_CONFIG[language].CARD.STATION}</div>
                        </div>
                        <div className={`icon-block ${connector.type?.toLowerCase()}`}>
                            <div className="icon-block-name">{connector.type}</div>
                            <div className='connector-type-card-ico'></div>
                        </div>
                    </div>
                    <div className="current-charging-card-body">

                        <div className="station-card-icon-wrapper">
                            <div className={`station-card-icon `}>
                                <h2 className="subtitle">{LANGUAGES_CONFIG[language].INITIALIZATION_PAGE.SUBTITLE_PAGE}</h2>
                                <div>
                                    <h2 className="subtitle">{loader}</h2>


                                </div>
                            </div>
                        </div>
                        < h3 className="article">
                            <span>{LANGUAGES_CONFIG[language].INITIALIZATION_PAGE.PARAGRAPH_PAGE_1}</span>
                            <span className="bold">{seconds}</span>
                            <span className="bold">{LANGUAGES_CONFIG[language].INITIALIZATION_PAGE.PARAGRAPH_PAGE_2}</span>
                        </h3>
                        < h3 className="article">
                            {LANGUAGES_CONFIG[language].INITIALIZATION_PAGE.PARAGRAPH_PAGE_3}
                        </h3>

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