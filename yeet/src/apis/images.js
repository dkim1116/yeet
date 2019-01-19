import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=' + '&format=json&nojsoncallback=1'
});