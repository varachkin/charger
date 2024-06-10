import { useLocation, useNavigate } from "react-router-dom";
import { InputWithKeyboard } from "../components/InputWithKeyboard";
import SwiperCube from "../components/SwiperCube";
import { array } from "../constants";
import { LANGUAGES_CONFIG } from "../locales";
import { useSelector } from "react-redux";
import { Footer } from "../components/Footer";
import { Link } from "@mui/material";

export const ChooseStationPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { language } = useSelector(state => state.actionReducer)
    const { chargerType } = location.state

const handleBack = ()=> {
    navigate(-1)
}

const handleGoToPreparingCharge = (station)=> {
    navigate('/preparing', {state: station})
}

    console.log(chargerType)
    return (
        <>
            <div>
                <h1 className="title">{LANGUAGES_CONFIG[language].CHOOSE_STATION_PAGE.TITLE_PAGE}</h1>
                <SwiperCube stations={array} handleGoToPreparingCharge={handleGoToPreparingCharge}/>
            </div>
            <Footer>
                <Link
                    component="button"
                    variant="body2"
                    className="link"
                    fontSize='3.5vw'
                    onClick={handleBack}
                >
                   { LANGUAGES_CONFIG[language].BUTTONS.BACK}
                </Link>
            </Footer>
        </>

    )
}