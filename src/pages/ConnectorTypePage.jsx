import { useNavigate } from "react-router-dom"
import { Footer } from "../components/Footer"
import { LANGUAGES_CONFIG } from "../locales"
import { useSelector } from "react-redux"
import { Grid } from "@mui/material"
import { InfoStationCard } from "../components/InfoStationCard"
import { v4 as uuidv4 } from 'uuid';
import { ChargingConnectorCard } from "../components/ChargingConnectorCard"
import { LinkCustom } from "../components/LinkCustom"

export const ConnectorTypePage = () => {
    const navigate = useNavigate()
    const { language } = useSelector(state => state.actionReducer)
    const { chargerTypes } = useSelector(state => state.dataReducer)

    const handleBack = () => {
        navigate(-1)
    }

    const handleNavigateToChooseStation = (type) => {
        navigate('/choose-station', {state: {chargerTypes: type}})
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
                            {chargerTypes.map(charger => (
                                <Grid item key={uuidv4()} flexGrow={1} onClick={() => handleNavigateToChooseStation(charger.type)}>
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
                <LinkCustom onClick={handleBack}>{LANGUAGES_CONFIG[language].BUTTONS.BACK}</LinkCustom>
            </Footer>
        </>

    )
}