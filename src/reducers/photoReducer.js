import { GET_RECENT, SEARCH_PHOTO } from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
        case GET_RECENT:
            return action.payload;
        case SEARCH_PHOTO:
            return action.payload;
        default:
            return state;
    }
}