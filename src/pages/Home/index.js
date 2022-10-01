import FetchData from "../../components/FetchData";
import CalidadAireContext from "../../context/CalidadAireContext";
import {useReducer} from "react";
import calidadAireReducer from "../../reducers/calidadAireReducer";
import CalidadAireTable from "../../components/CalidadAireTable";
import "./index.css"

const Home = () => {

    const [calidadAireState, calidadAireDispatch] = useReducer(calidadAireReducer, {
        data:[]
    });

    const providerState = {
        calidadAireState,
        calidadAireDispatch
    }
    const processResults = (response) => {
        return response.results.map(result => ({
            calculationTime: result.stations[0]?.indexes[0]?.calculationTime,
            responsiblePollutant: result.stations[0]?.indexes[0]?.responsiblePollutant,
            valueIndexes: result.stations[0]?.indexes[0]?.value,
            scale: result.stations[0]?.indexes[0]?.scale,
            averagedOverInHours: result.stations[0]?.measurements[0]?.averagedOverInHours,
            unit: result.stations[0].measurements[0]?.unit,
            valueMeasurements: result.stations[0]?.measurements[0]?.value,
            pollutant: result.stations[0]?.measurements[0]?.pollutant,
            source_id: result.stations[0].source_id,
            name: result.stations[0].name,
            idStation: result.stations[0].id,
            id:result._id
        }))
    }
    return (
        <div className="App">
            <CalidadAireContext.Provider value={providerState}>
                <FetchData
                    fetchPromise={
                        fetch("https://api.datos.gob.mx/v1/calidadAire")
                            .then(response => response.json())
                            .then(processResults)
                    }
                    actionType="setCalidadAire"/>
                <CalidadAireTable/>
            </CalidadAireContext.Provider>
        </div>)
}
export default Home;