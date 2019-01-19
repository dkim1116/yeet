import images from '../apis/images';
import {
    FETCH_PHOTO
} from './types';

export const fetchVideo = () => async dispatch => {
    const response = await images.get();

    dispatch({ type: FETCH_PHOTO, payload: response.data.photos});
};