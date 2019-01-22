import { ON_TYPE } from '../actions/types';

export default (state = '', action) => {
    switch (action.type) {
        case ON_TYPE:
            return action.payload;
        default:
            return state;
    }
}