import { UPDATE_DATA, UPDATE_PRODUCTS } from "../types/types";

const initialState = {
    data: [],
    products: {}
};
function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_DATA :
            return {...state, data:action.payload}
        case UPDATE_PRODUCTS :
            return {...state, products: action.payload}
        default:
            return state;
    }
}

export default reducer;