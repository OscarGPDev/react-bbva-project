import Table from "./Table";
import {useCalidadAireContext} from "../context/CalidadAireContext";

const CalidadAireTable = () => {
    const headers = [{
        name: "Fecha de calculo",
        value: "calculationTime"
    },
        {
            name: "Principal contaminante",
            value: "responsiblePollutant"
        },
        {
            name: "Valor",
            value: "value"
        }
        ,
        {
            name: "Escala",
            value: "scale"
        },
        {
            name: "Horas promediadas",
            value: "averagedOverInHours"
        },
        {
            name: "Unidad",
            value: "unit",
        },
        {
            name: "Contaminante",
            value: "pollutant",
        },
        {
            name: "Ubicación",
            drawFunction: (row) => `${row.source_id} ${row.name} ${row.id}`
        }
    ];
    const {calidadAireState} = useCalidadAireContext();
    return <div>
        <Table headers={headers} data={calidadAireState}/>
    </div>
}
export default CalidadAireTable