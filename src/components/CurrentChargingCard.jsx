import { Paper } from "@mui/material"
import { ButtonCustom } from "./ButtonCustom"
import { LANGUAGES_CONFIG } from "../locales"
import { useSelector } from "react-redux"
import { LoaderProgress } from "./LoaderProgress"

export const CurrentChargingCard = ({ station }) => {
    const { language } = useSelector(state => state.actionReducer);

    console.log('station', station)
    return (
        <Paper
            className="current-charging-card"
            elevation={6}
        >
            <div className="current-charging-card-header">
                <div className="station-block">
                    <div className='station-card-number'>{station.number}</div>
                    <div className='station-card-name'>{station.name[language]}</div>
                </div>
                <div className={`icon-block ${station.charger.type}`}>
                    <div className="icon-block-name">{station.charger.name}</div>
                    <div className='connector-type-card-ico'></div>
                </div>
            </div>
            <div className="current-charging-card-body">
                <LoaderProgress full={5} />

            </div>
            <div className="current-charging-card-footer">
                <ButtonCustom className='button' onClick={() => { }}>{LANGUAGES_CONFIG[language].BUTTONS.FINISH_CHARGING}</ButtonCustom>
            </div>
        </Paper>
    )
}