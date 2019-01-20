import axios from 'axios';

export const GetRecent = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=&format=json&nojsoncallback=1'
});

export const SearchPhoto = axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=&format=json&nojsoncallback=1&text='
});