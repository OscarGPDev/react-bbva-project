import Table from "./Table";
import {useCalidadAireContext} from "../context/CalidadAireContext";

const CalidadAireTable = () => {
    const headers = [{
        name: "Fecha de calculo", value: "calculationTime", id: 1
    }, {
        name: "Contaminante responsable", value: "responsiblePollutant", id: 2
    }, {
        name: "Valor", value: "value", id: 3
    }, {
        name: "Escala", value: "scale", id: 4
    }, {
        name: "Horas promediadas", value: "averagedOverInHours", id: 5
    }, {
        name: "Unidad", value: "unit", id: 6
    }, {
        name: "Contaminante", value: "pollutant", id: 7
    }, {
        name: "Ubicación",
        drawFunction: (row) => `${row.source_id} ${row.name} ${row.idStation}`,
        id: 8,
        value: "source_id"
    }, {
        name: "Coordenadas", drawFunction: (row) => `lat: ${row.lat}, long: ${row.long}`, id: 9, value: "lat"
    }];
    const {calidadAireState} = useCalidadAireContext();
    return <div>
        <Table headers={headers} data={calidadAireState.data}/>
    </div>
}
export default CalidadAireTable