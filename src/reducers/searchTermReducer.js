import { 
    HANDLE_SEARCH_TERM_CHANGE,
    HANDLE_SEARCH_TERM_SUBMIT
} from '../actions/types';

export const searchTermReducer = (state = '', action) => {
    switch (action.type) {
        case HANDLE_SEARCH_TERM_CHANGE:
            return action.payload;
        default:
            return state;
    }
};

export const submitTermReducer = (state = 'Recent Uploads', action) => {
    switch (action.type) {
        case HANDLE_SEARCH_TERM_SUBMIT:
            return action.payload;
        default:
            return state;
    }
};