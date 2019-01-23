import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import { 
    searchTermReducer,
    submitTermReducer
} from './searchTermReducer';

export default combineReducers({
    photos: photoReducer,
    searchTerm: searchTermReducer,
    submitTerm: submitTermReducer
});