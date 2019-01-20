import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=fbdc58683e712c507e300e24af6ee459&format=json&nojsoncallback=1'
});