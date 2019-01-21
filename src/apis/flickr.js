import axios from 'axios';

import { 
    FLICKR_PUBLIC,
    FLICKR_FORMAT,
    FLICKR_TEXT
} from './constants';

export const GetRecent = axios.create({
    baseURL: `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${FLICKR_PUBLIC+FLICKR_FORMAT}`
});

export const SearchPhoto = axios.create({
    baseURL: `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${FLICKR_PUBLIC+FLICKR_FORMAT+FLICKR_TEXT}`
});