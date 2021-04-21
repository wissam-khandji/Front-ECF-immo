export const SET_ANNONCES = "SET_ANNONCES"
export const ADD_ANNONCE = "ADD_ANNONCE"
export const ADD_USER = "ADD_ANNONCE"

export function GlobalReducer (state = {}, action) {
    switch( action.type){
        case SET_ANNONCES:
            return { data : action.payload};
        case ADD_ANNONCE:
            console.log(state)
            return [...state.data, action.payload];
        case ADD_USER:
            console.log(state)
            return [...state, action.payload]
        default:
        return state
    }
}