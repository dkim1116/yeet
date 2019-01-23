import { GetRecent, SearchPhoto } from '../apis/flickr';
import {
    GET_RECENT,
    SEARCH_PHOTO,
    ON_TYPE
} from './types';

export const getRecent = () => async dispatch => {
    const response = await GetRecent.get();

    dispatch({ type: GET_RECENT, payload: response.data.photos.photo});
};

export const searchPhoto = (term) => async dispatch => {
    const response = await SearchPhoto.get(term);

    dispatch({ type: SEARCH_PHOTO, payload: response.data.photos.photo});
};

export const onType = (term) => dispatch => {
    dispatch({ type: ON_TYPE, payload: term });
};