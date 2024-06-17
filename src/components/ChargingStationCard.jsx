import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { Loader } from './Loader';
import { LANGUAGES_CONFIG } from '../locales';
import { useEffect, useState } from 'react';

export const ChargingStationCard = ({ id, status,  handleGoToPreparingCharge=()=>{} }) => {
    const [isError, setIsError] = useState(false)
    const [isAvailable, setIsAvailable] = useState(true)
    
    useEffect(() => {
        status === 'Alarm' && setIsError(true)
        status !== 'Unknown' && setIsAvailable(false)
    })
    const { language } = useSelector(state => state.actionReducer)

    const subtitles = {
        Ended: LANGUAGES_CONFIG[language].START_PAGE.CARD_READY,
        Charging: LANGUAGES_CONFIG[language].START_PAGE.CARD_CHARGING,
        AuthorizedNotPluggedIn: LANGUAGES_CONFIG[language].START_PAGE.CARD_SUCCESS,
        Unknown: LANGUAGES_CONFIG[language].START_PAGE.CARD_NOT_AVAILABLE,
        Alarm: LANGUAGES_CONFIG[language].START_PAGE.CARD_ERROR
    }

    return (
        <div onClick={()=> handleGoToPreparingCharge(id)}>
            <Paper
                sx={{
                    height: '30vh',
                    backgroundColor: isError ? '#FFDAD6' : 'inherit',
                    border: isAvailable ? '2px dashed #ABABAB' : 'inherit',
                    opacity: !isAvailable ? 1 : 0.7,
                }}
                elevation={isAvailable ? 0 : 6}
                className='station-card-wrapper'
            >
                <div className='station-card-number'>{id}</div>
                <div className='station-card-name'>{LANGUAGES_CONFIG[language].CARD.STATION}</div>
                <div className='station-card-icon-wrapper'>
                    <div className={`station-card-icon ${status}`}></div>
                </div>
                <div
                    className='station-card-title'
                >
                    {subtitles[status]}
                </div>

            </Paper>
        </div>
    )
}