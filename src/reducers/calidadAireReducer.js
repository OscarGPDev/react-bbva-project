const calidadAireReducer = (state, action) => {
    switch (action.type) {
        case 'setCalidadAire':
            return {data: action.payload};
        default:
            throw new Error("Invalid action type: " + action.type);
    }
}
export default calidadAireReducer;