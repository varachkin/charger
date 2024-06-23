import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { LANGUAGES_CONFIG } from '../locales';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ChargingStationCard = ({ id, status, handleRedirect }) => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const [isAvailable, setIsAvailable] = useState(true)

    useEffect(() => {
        status === 'Faulted' && setIsError(true)
        status !== 'Unavailable' && setIsAvailable(false)
    })
    const { language } = useSelector(state => state.actionReducer)

    const subtitles = {
        Reserved: LANGUAGES_CONFIG[language].START_PAGE.CARD_READY,
        Charging: LANGUAGES_CONFIG[language].START_PAGE.CARD_CHARGING,
        Available: LANGUAGES_CONFIG[language].START_PAGE.CARD_SUCCESS,
        Unavailable: LANGUAGES_CONFIG[language].START_PAGE.CARD_NOT_AVAILABLE,
        Faulted: LANGUAGES_CONFIG[language].START_PAGE.CARD_ERROR
    }

    return (
        <div onClick={()=> handleRedirect(id)}>
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