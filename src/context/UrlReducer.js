import { ADD_URL, GET_URL_STORAGE, VIEW_ERROR } from "../types"

export const urlReducer = (state, action) => {
    switch (action.type) {

        case ADD_URL:
            return {
                ...state,
                urls: [...state.urls,action.payload],
                error: false
            }
        case GET_URL_STORAGE:
            return {
                ...state,
                urls: action.payload
            }
        case VIEW_ERROR: 
        return {
            ...state,
            error: true
        }    
            
        default:
            return state
    }
}

//    const url = v4();
//    console.log(url.toString().substring(24));