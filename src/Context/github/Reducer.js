import {
    SEARCH_USER,
    GET_USER,
    GET_REPOS,
    SET_ALERT,
    SET_LOADING,
    REMOVE_ALERT,
    GET_USER_INFO
} from "../types";
  
export default (state, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case GET_USER:
            return {
                ...state,
                userList: action.payload,
                loading: false,
            }
        case SEARCH_USER:
            return {
                ...state,
                userList: action.payload,
                loading: false,
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}