import { useLocation, useNavigate } from "react-router-dom";
import SwiperCube from "../components/SwiperCube";
import { LANGUAGES_CONFIG } from "../locales";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { Link } from "@mui/material";
import { filterStationsByConnectorType } from "../utils";

export const SwiperPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { language } = useSelector(state => state.actionReducer)
    const { stations } = useSelector(state => state.dataReducer)
    const connectorType = location.state.connectorType;

    const handleBack = () => {
        navigate(-1)
    }
    console.log(stations)
    console.log(connectorType)
    const arr = filterStationsByConnectorType(stations, connectorType);
    return (
        <>
            <div>
                <h1 className="title">{LANGUAGES_CONFIG[language].CHOOSE_STATION_PAGE.TITLE_PAGE}</h1>
                <SwiperCube stations={arr} connectorType={connectorType}/>
            </div>
            <Footer>
                <Link
                    component="button"
                    variant="body2"
                    className="link"
                    fontSize='3.5vw'
                    onClick={handleBack}
                >
                    {LANGUAGES_CONFIG[language].BUTTONS.BACK}
                </Link>
            </Footer>
        </>

    )
}