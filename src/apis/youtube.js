import axios from 'axios';

const KEY = 'AIzaSyB79fN1L0Oo3zPX7sx0n2dR4xHqQ2gecuQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});