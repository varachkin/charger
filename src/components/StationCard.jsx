import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { LANGUAGES_CONFIG } from '../locales';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const StationCard = ({ id, connector }) => {
    const navigate = useNavigate()
    const [isError, setIsError] = useState(false)
    const [isAvailable, setIsAvailable] = useState(true)
    
    const {status} = connector.latestTransaction

    useEffect(() => {
        connector.status === 'Faulted' && setIsError(true)
        connector.status !== 'Unavailable' && setIsAvailable(false)
    })
    const { language } = useSelector(state => state.actionReducer)

    const subtitles = {
        Ended: LANGUAGES_CONFIG[language].START_PAGE.CARD_READY,
        Charging: LANGUAGES_CONFIG[language].START_PAGE.CARD_CHARGING,
        AuthorizedNotPluggedIn: LANGUAGES_CONFIG[language].START_PAGE.CARD_SUCCESS,
        Unavailable: LANGUAGES_CONFIG[language].START_PAGE.CARD_NOT_AVAILABLE,
        Alarm: LANGUAGES_CONFIG[language].START_PAGE.CARD_ERROR
    }

    const redirectConfig = {
        Ended: () => navigate('/charging', {state: {connector, id}}),
        Charging: () => navigate('/charging', {state: {connector, id}}),
        AuthorizedNotPluggedIn: () => navigate('/preparing', {state: {connector, id}}),
        Unavailable: ()=> {},
        Alarm: ()=> navigate('/error-station', {state: {connector, id}}),
    }
    console.log(connector, id)
    return (
        <div onClick={redirectConfig[status]}>
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