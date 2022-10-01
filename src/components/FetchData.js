import {useEffect, useReducer} from "react";

const FetchData = ({fetchPromise, actionType,}) => {
    const [state, dispatch] = useReducer()
    useEffect(() => {
        fetchPromise.then(response => dispatch(actionType, response));
    }, [])
    return null
};
export default FetchData;