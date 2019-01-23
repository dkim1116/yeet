import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import typeReducer from './typeReducer';

export default combineReducers({
    photos: photoReducer,
    searchTerm: typeReducer
});