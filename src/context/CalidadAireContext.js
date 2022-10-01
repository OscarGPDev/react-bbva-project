import {createContext, useContext} from 'react';


const CalidadAireContext = createContext();

export function useCalidadAireContext() {
    return useContext(CalidadAireContext);
}

export default CalidadAireContext;