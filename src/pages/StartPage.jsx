import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { setStations } from "../features/data/dataSlice";

export const StartPage = () => {
    const { language, stationID } = useSelector(state => state.actionReducer);
    const { stations } = useSelector(state => state.dataReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleGoNext = () => {
        navigate('/connector-type');
    };

    useEffect(() => {
        const fetchStations = () => {
            getStations(stationID).then(response => {
                if(response.status === 200){
                    dispatch(setStations(response.data))
                }
            });
           
        };

        // Initial fetch
        fetchStations();

        // Set interval to fetch stations every 2 seconds
        const intervalId = setInterval(fetchStations, 1000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

   const processingStations = getProcessingStations(getAvailableStations(stations))

    console.log('available', getAvailableStations(stations));
    console.log('processing', getProcessingStations(getAvailableStations(stations)));

    return (
        <>
            <div className="page">
                <h1 className="title">
                    {!processingStations.length ?
                        LANGUAGES_CONFIG[language].START_PAGE.TITLE_EMPTY :
                        LANGUAGES_CONFIG[language].START_PAGE.TITLE_BUSY
                    }
                </h1>
                <section className="section">
                    {!processingStations.length ?
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
                                                    <ChargingStationCard id={item.id} connector={item.connectors.find(connector => connector.status !== null)} />
                                                </Grid>
                                            );
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
                <LinkCustom onClick={() => navigate('/initialization')}>???? simulate connect ????</LinkCustom>
                <ButtonCustom onClick={handleGoNext}>
                    {LANGUAGES_CONFIG[language].BUTTONS.GET_STARTED}
                </ButtonCustom>
            </Footer>
        </>
    );
};