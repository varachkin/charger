import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import {LANGUAGES_CONFIG} from "../locales";
import {Footer} from "../components/Footer";
import {Grid} from "@mui/material";
import {useState} from "react";
import {ChargingStationCard} from "../components/ChargingStationCard";
import {InfoStationCard} from "../components/InfoStationCard";
import {v4 as uuidv4} from 'uuid';
import {ButtonCustom} from "../components/ButtonCustom";
import { STATIONS } from "../constants";


export const StartPage = () => {
    const [isEmptyStation, setIsEmptyStation] = useState(false)
    const {language} = useSelector(state => state.actionReducer);
    const {stations} = useSelector(state => state.dataReducer);
    const navigate = useNavigate()

    const handleGoNext = () => {
        navigate('/connector-type')
    }

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
                                      sx={{padding: '1rem'}}>
                                    {STATIONS.map((item, index, arr) => (
                                        <Grid item key={index} flexGrow={1} minWidth={arr.length === 1 ? '100%' : '50%'}
                                              justifyContent='center'>
                                            <ChargingStationCard item={item}/>
                                        </Grid>
                                    ))}
                                    <>
                                        <Grid item key={uuidv4()} minWidth={'50%'}>
                                            <InfoStationCard/>
                                        </Grid>
                                    </>
                                </Grid>
                            </div>
                        )}
                </section>
            </div>
            <Footer>
                <ButtonCustom
                    onClick={handleGoNext}
                >
                    {LANGUAGES_CONFIG[language].BUTTONS.GET_STARTED}
                </ButtonCustom>
            </Footer>
        </>

    )
}