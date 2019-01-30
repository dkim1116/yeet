import { GetRecent, SearchPhoto } from '../apis/flickr';
import {
    GET_RECENT,
    SEARCH_PHOTO,
    HANDLE_SEARCH_TERM_CHANGE,
    HANDLE_SEARCH_TERM_SUBMIT,
    GOOGLE_SIGNIN,
    GOOGLE_SIGNOUT
} from './types';

export const getRecent = () => async dispatch => {
    const response = await GetRecent.get();

    dispatch({ type: GET_RECENT, payload: response.data.photos.photo});
};

export const searchPhoto = (term) => async dispatch => {
    const response = await SearchPhoto.get(term);

    dispatch({ type: SEARCH_PHOTO, payload: response.data.photos.photo});
};

export const onSearchTermChange = (term) => dispatch => {
    dispatch({ type: HANDLE_SEARCH_TERM_CHANGE, payload: term });
};

export const onSearchTermSubmit = (term) => dispatch => {
    dispatch({ type: HANDLE_SEARCH_TERM_SUBMIT, payload: term });
};

export const googleSignIn = (userId) => dispatch => {
    dispatch({ type: GOOGLE_SIGNIN, payload: userId });
};

export const googleSignOut = () => dispatch => {
    dispatch({ type: GOOGLE_SIGNOUT });
};