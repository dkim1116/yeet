import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='
});