import { combineReducers } from 'redux';
import photoReducer from './photoReducer';
import { 
    searchTermReducer,
    submitTermReducer
} from './searchTermReducer';
import googleAuthReducer from './googleAuthReducer';

export default combineReducers({
    photos: photoReducer,
    searchTerm: searchTermReducer,
    submitTerm: submitTermReducer,
    googleAuth: googleAuthReducer
});