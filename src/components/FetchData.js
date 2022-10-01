import {useEffect} from "react";
import {useCalidadAireContext} from "../context/CalidadAireContext";

const FetchData = ({fetchPromise, actionType,}) => {
    const {calidadAireDispatch} = useCalidadAireContext();
    useEffect(() => {
        fetchPromise.then(response => {
            calidadAireDispatch({type: actionType, payload: response})
        });
    }, []);
    return null
};
export default FetchData;