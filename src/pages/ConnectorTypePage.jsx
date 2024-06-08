import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import { LANGUAGES_CONFIG } from "../locales"
import { useSelector } from "react-redux"
import { Grid } from "@mui/material"
import { InfoStationCard } from "../components/InfoStationCard"
import { v4 as uuidv4 } from 'uuid';
import { ChargingConnectorCard } from "../components/ChargingConnectorCard"
import { typesChargers } from "../constants"

export const ConnectorTypePage = () => {
    const navigate = useNavigate()
    const { language } = useSelector(state => state.actionReducer)

    const handleBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className="page">
                <h1
                    className="title"
                >
                    {LANGUAGES_CONFIG[language].CONNECTOR_TYPE_PAGE.PAGE_TITLE}

                </h1>
                <section className="section">
                    <div className="connector-type-wrapper">
                        <Grid container rowSpacing={6} columns={1} justifyContent='center' flexDirection='column' sx={{ padding: '1rem' }}>
                            {typesChargers.map(charger => (
                                <Grid item key={uuidv4()} flexGrow={1}>
                                    <ChargingConnectorCard charger={charger}/>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </section>
                <h2
                    className="subtitle"
                >
                    {LANGUAGES_CONFIG[language].CONNECTOR_TYPE_PAGE.PAGE_SUBTITLE}

                </h2>
            </div>
            <Footer>
                <button onClick={handleBack}>BACK</button>
            </Footer>
        </>

    )
}