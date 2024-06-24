import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LANGUAGES_CONFIG } from "../locales";
import { Footer } from "../components/Footer";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ChargingStationCard } from "../components/ChargingStationCard";
import { InfoStationCard } from "../components/InfoStationCard";
import { v4 as uuidv4 } from 'uuid';
import { ButtonCustom } from "../components/ButtonCustom";
import { getAvailableStations, getProcessingStations } from "../utils";
import { LinkCustom } from "../components/LinkCustom";
import { getStations } from "../API";


export const StartPage = () => {
    const [isEmptyStation, setIsEmptyStation] = useState(false)
    const { language, stationID } = useSelector(state => state.actionReducer);
    const { stations } = useSelector(state => state.dataReducer);
    const navigate = useNavigate()

    const handleGoNext = () => {
        navigate('/connector-type')
    }

    const handleGoToCurrentSession = (id)=> {
        navigate('/charging', {state: {id: id}})
    }

    useEffect(() => {
        getStations(stationID).then()
        if(!getProcessingStations(getAvailableStations(stations)).length){
            setIsEmptyStation(true)
        }
    }, [])
    console.log('available', getAvailableStations(stations))
    console.log('processing', getProcessingStations(getAvailableStations(stations)))
    return (
        <>
            <div className="page">
                <h1
                    className="title"
                >
                    {isEmptyStation ?
                        LANGUAGES_CONFIG[language].START_PAGE.TITLE_EMPTY :
                        LANGUAGES_CONFIG[language].START_PAGE.TITLE_BUSY
                    }
                </h1>
                <section className="section">
                    {isEmptyStation ?
                        (
                            <div className="advertising-section">
                                REKLAMA
                            </div>
                        ) :
                        (
                            <div className="stations-list">
                                <Grid container rowSpacing={3} columnSpacing={3} justifyContent='center'
                                    sx={{ padding: '1rem' }}>
                                    {getProcessingStations(getAvailableStations(stations))
                                        .map((item, index, arr) => {
                                            return (
                                                <Grid item key={index} flexGrow={1} minWidth={arr.length === 1 ? '100%' : '50%'}
                                                    justifyContent='center'>
                                                    <ChargingStationCard id={item.id} status={item.connectors.find(connector => connector.status !== null)?.status} handleRedirect={handleGoToCurrentSession}/>
                                                </Grid>
                                            )
                                        })}
                                    <>
                                        <Grid item key={uuidv4()} minWidth={'50%'}>
                                            <InfoStationCard />
                                        </Grid>
                                    </>
                                </Grid>
                            </div>
                        )}
                </section>
            </div>
            <Footer>
                <LinkCustom onClick={()=> navigate('/initialization')}>???? simulate connect ????</LinkCustom>
                <ButtonCustom
                    onClick={handleGoNext}
                >
                    {LANGUAGES_CONFIG[language].BUTTONS.GET_STARTED}
                </ButtonCustom>
            </Footer>
        </>

    )
}