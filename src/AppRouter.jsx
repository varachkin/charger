import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StartPage } from "./pages/StartPage";
import { Wrapper } from "./pages/Wrapper";
import { ErrorBoundary } from "./ErrorBoundary";
import { Page_2 } from "./pages/Page_2";
import { ConnectorTypePage } from "./pages/ConnectorTypePage";
import { ChooseStationPage } from "./pages/ChooseStationPage";
import { PreparingForChargingPage } from "./pages/PreparingForChargingPage";
import { CardPaymentPage } from "./pages/CardPaymentPage";
import { ChargingPage } from "./pages/ChargingPage";
import { RatingPage } from "./pages/RatingPage";
import { ThanksPage } from "./pages/ThanksPage";

export default function AppRouter(props) {
    return (
        <BrowserRouter>
            <Wrapper>
                <Routes>
                    <Route path="/" element={<StartPage {...props} error={<ErrorBoundary />} />} />
                    <Route path="connector-type" element={<ConnectorTypePage {...props} error={<ErrorBoundary />} />} />
                    <Route path="/choose-station" element={<ChooseStationPage {...props} error={<ErrorBoundary />} />} />
                    <Route path="/preparing" element={<PreparingForChargingPage {...props} error={<ErrorBoundary />} />} />
                    <Route path="/card-payment" element={<CardPaymentPage {...props} error={<ErrorBoundary />} />} />
                    <Route path="/charging" element={<ChargingPage {...props} error={<ErrorBoundary />} />} />
                    <Route path="/raiting" element={<RatingPage {...props} error={<ErrorBoundary />} />} />
                    <Route path="/thanks" element={<ThanksPage {...props} error={<ErrorBoundary />} />} />
                    <Route path="/page_2" element={<Page_2 {...props} error={<ErrorBoundary />} />} />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    );
}
