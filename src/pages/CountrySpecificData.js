import { useLocation } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap"
import CurrentData from "../components/CurrentData";
import HistoryData from "../components/HistoryData";

const CountrySpecificData = () => {
    const { state } = useLocation()
    console.log(state)
    return (
        <>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Current Data">
                    <CurrentData moreData={state.moreData}/>
                </Tab>
                <Tab eventKey="profile" title="History Data">
                    <HistoryData historyData={state.historyData}/>
                </Tab>
            </Tabs>
        </>
    )
}

export default CountrySpecificData